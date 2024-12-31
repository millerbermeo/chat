// src/App.tsx
import React, { useState } from 'react';
import ChatComponent from './components/cc/ChatComponent';
import { ContactosList } from './components/cc/ContactosList';



const App: React.FC = () => {
  const [contact, setContact] = useState<string>(''); // Número del contacto

  return (
    <>
      {/* <div>
        <h1>WhatsApp Clone</h1>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Número de teléfono del contacto"
        />
        {contact && <ChatComponent phoneNumber={contact} />}
      </div> */}
      <div className='p-10'>
        <div className='flex border rounded-2xl overflow-hidden h-[85vh] 2xl:h-[90vh]'>
          <ContactosList />
          <ChatComponent />
        </div>
      </div>


    </>
  );
};

export default App;
