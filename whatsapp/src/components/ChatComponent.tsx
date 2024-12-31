// src/components/ChatComponent.tsx
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001', {
    transports: ['websocket'], // Asegúrate de usar 'websocket' o agregar 'polling' si es necesario
    withCredentials: true, // Permitir envío de cookies/credenciales
  });

interface Message {
  body: string;
  direction: 'in' | 'out';
}

interface ChatProps {
  phoneNumber: string;
}





socket.on('connect', () => {
  console.log('Conectado al servidor WebSocket');
});

socket.on('message', (data) => {
  console.log('Mensaje recibido del servidor:', data);
});


const ChatComponent: React.FC<ChatProps> = ({ phoneNumber }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Al conectarse al WebSocket, obtenemos los mensajes del contacto
    socket.emit('get_messages', phoneNumber);
    
    socket.on('messages', (msgs: Message[]) => {
      setMessages(msgs);
    });

    socket.on('message', (msg: { phoneNumber: string; body: string }) => {
      if (msg.phoneNumber === phoneNumber) {
        setMessages((prev) => [...prev, { body: msg.body, direction: 'in' }]);
      }
    });

    return () => {
      socket.off('messages');
      socket.off('message');
    };
  }, [phoneNumber]);

  const sendMessage = () => {
    socket.emit('send_message', { phoneNumber, body: message });
    setMessages([...messages, { body: message, direction: 'out' }]);
    setMessage('');
  };

  return (
    <div>
      <h2>Chat con {phoneNumber}</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.direction === 'out' ? 'outgoing' : 'incoming'}>
            {msg.body}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe un mensaje..."
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default ChatComponent;
