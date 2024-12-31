import React, { useState, useRef } from 'react';
import { Home, Search, User } from 'lucide-react'; // Importando el icono de usuario desde lucide-react

const ChatComponent: React.FC = () => {
    const [mensajes, setMensajes] = useState([
        { id: 1, usuario: '1', texto: 'Hola, ¿cómo estás?', fecha: '2024-12-30' },
        { id: 2, usuario: '2', texto: '¡Hola! Muy bien, ¿y tú?', fecha: '2024-12-30' },
        { id: 3, usuario: '1', texto: 'Todo bien, gracias. ¿Qué has hecho hoy?', fecha: '2024-12-30' },
        { id: 4, usuario: '2', texto: 'He estado trabajando, nada fuera de lo normal.', fecha: '2024-12-30' },
        { id: 5, usuario: '1', texto: 'Qué bien, ¿en qué estás trabajando?', fecha: '2024-12-30' },
        { id: 6, usuario: '2', texto: 'Estoy desarrollando un proyecto de software, bastante interesante.', fecha: '2024-12-30' },
        { id: 7, usuario: '1', texto: '¡Suena genial! ¿Te está yendo bien con eso?', fecha: '2024-12-30' },
        { id: 8, usuario: '2', texto: 'Sí, está yendo bien, aunque hay algunos desafíos.', fecha: '2024-12-30' },
        { id: 9, usuario: '1', texto: '¿Qué tipo de desafíos? Tal vez pueda ayudarte.', fecha: '2024-12-30' },
        { id: 10, usuario: '2', texto: '¡Gracias! Principalmente con la optimización de la base de datos.', fecha: '2024-12-30' },
        { id: 11, usuario: '1', texto: 'Eso puede ser complicado, pero con la estrategia correcta seguro lo solucionas.', fecha: '2024-12-30' },
        { id: 12, usuario: '2', texto: 'Sí, estoy buscando la mejor manera de organizar las consultas.', fecha: '2024-12-30' },
        { id: 13, usuario: '1', texto: 'Si necesitas alguna recomendación o alguna herramienta, avísame.', fecha: '2024-12-30' },
        { id: 14, usuario: '2', texto: 'Te lo agradezco mucho. Seguro que puedo aprender algo de ti.', fecha: '2024-12-30' },
        { id: 15, usuario: '1', texto: 'Estoy siempre disponible para ayudar, solo dime.', fecha: '2024-12-30' },
    ]);

    const mensajeInputRef = useRef<HTMLInputElement | null>(null);

    const enviarMensaje = () => {
        if (mensajeInputRef.current) {
            const nuevoMensaje = mensajeInputRef.current.value;
            if (nuevoMensaje.trim()) {
                setMensajes((prev) => [
                    ...prev,
                    { id: prev.length + 1, usuario: '2', texto: nuevoMensaje, fecha: '2024-12-30' },
                ]);
                mensajeInputRef.current.value = '';
            }
        }
    };

    return (
        <div className="w-full h-full shadow-lg flex flex-col bg-gray-100 relative">
            {/* Barra Superior */}
            <div className="w-full flex h-16 justify-between items-center px-5 bg-gray-200">
                <div className="flex gap-2 items-center">
    
                        <img className='w-[50px] h-[50px] border object-cover rounded-full' src="https://media.istockphoto.com/id/1090878494/es/foto/retrato-de-joven-sonriente-a-hombre-guapo-en-camiseta-polo-azul-aislado-sobre-fondo-gris-de.jpg?s=612x612&w=0&k=20&c=dHFsDEJSZ1kuSO4wTDAEaGOJEF-HuToZ6Gt-E2odc6U=" alt="" />
         

                    <span className="font-normal">Miller Rivera</span>
                </div>

                <div className='cursor-pointer rounded-full bg-white w-10 h-10 flex justify-center items-center'>
                    <Search />
                </div>
            </div>

            {/* Sección de Mensajes */}
            <div className="w-full scroolbar  h-full overflow-y-scroll  bg-gray-100">
                <ul className="w-full 2xl:max-w-[95%] px-4 mx-auto">
                    {mensajes.map((mensaje) => (
                        <li
                            key={mensaje.id}
                            className={`flex items-end  ${mensaje.usuario === '2' ? 'justify-end' : 'justify-start'} py-2 gap-2`}
                        >
                            {mensaje.usuario !== '2' && (
                                <div className="border border-gray-300 text-2xl w-10 h-10 grid place-items-center text-gray-400 bg-gray-200 rounded-full">
                                    <User />
                                </div>
                            )}
                            <div
                                className={`text-black text-[15px] rounded-xl shadow p-2 ${mensaje.usuario === '2'
                                    ? 'bg-[#84b6f4] text-gray-900 rounded-tr-sm rounded-bl-sm text-left max-w-[65%]'
                                    : 'bg-gray-300 rounded-tl-sm rounded-br-sm max-w-[65%]'
                                    }`}
                            >
                                {mensaje.texto}
                            </div>
                            {mensaje.usuario === '2' && (
                                <div className="border border-[#84b6f4] text-2xl w-10 h-10 grid place-items-center text-[#84b6f4] bg-gray-200 rounded-full">
                                    <User />
                                </div>
                            )}


                        </li>
                    ))}
                </ul>
                <div className="w-full flex items-center  px-4 py-2 bg-gray-100 sticky bottom-0 shadow-lg">
                    <input
                        ref={mensajeInputRef}
                        type="text"
                        placeholder="Escribe un mensaje..."
                        className="w-full px-4 py-3 bg-gray-100 text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        onClick={enviarMensaje}
                        className="ml-2 p-2 absolute right-5 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                    >
                        Enviar
                    </button>
                </div>


            </div>


        </div>
    );
};

export default ChatComponent;
