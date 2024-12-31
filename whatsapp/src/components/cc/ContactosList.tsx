import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Settings, User } from 'lucide-react';

interface Contacto {
    id: number;
    phoneNumber: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

interface ModalProps {
    numero: number;
}

export const ContactosList: React.FC = () => {
    const [elementoSeleccionado, setElementoSeleccionado] = useState<number | null>(null);
    const [contactos, setContactos] = useState<Contacto[]>([]);

    // Realizar la solicitud a la API para obtener los contactos
    useEffect(() => {
        const fetchContactos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/contacts');
                setContactos(response.data); // Actualiza el estado con los contactos obtenidos
            } catch (error) {
                console.error('Error al obtener los contactos:', error);
            }
        };

        fetchContactos();
    }, []); // Este efecto solo se ejecuta una vez, al montar el componente

    return (
        <div className="w-full scroolbar h-full overflow-auto bg-white rounded-xl rounded-tr-none pb-5 md:pb-2 max-w-[400px] mx-auto">
            <div className='w-full h-auto pb-2 z-10 bg-gray-200 sticky top-0'>
                <div className="flex justify-between h-full items-center px-4 py-2">
                    <div className="flex items-center gap-4">
                        <img
                            className="w-14 h-14 object-cover rounded-full border-gray-300"
                            src="https://logowik.com/content/uploads/images/live-chat9310.logowik.com.webp"
                            alt="Usuario"
                        />
                        <h1 className="text-xl font-semibold text-gray-800">Hola Admin..</h1>
                    </div>
                    <div className="flex items-center">
                        <Settings />
                    </div>
                </div>

                <div className="w-full flex items-center px-4">
                    <input
                        type="text"
                        placeholder="Buscar un contacto..."
                        className="w-full px-4 py-2 bg-gray-100 text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {contactos.map((item) => (
                <div
                    key={item.id}
                    className={`flex gap-3 w-full px-3 py-3 border-b border-gray-200 relative justify-start items-center hover:bg-gray-100 cursor-pointer rounded-lg
                    ${elementoSeleccionado === item.id ? 'bg-gray-100' : ''}`}
                >
                    {/* Avatar */}
                    <div className='w-[50px] h-[50px] flex justify-center items-center rounded-full bg-gray-200'>
                        <User size={24} className="text-gray-600" />
                    </div>

                    {/* Contact Info */}
                    <div className='flex-1 ml-3'>
                        <div className="flex justify-between">
                            <span className="text-sm font-medium text-gray-800">{item.name ? item.name : item.phoneNumber}</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1 flex w-full justify-between">
                            {item.phoneNumber ? item.phoneNumber : "Archivo Adjunto"}
                            <span className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};





// import React, { useState } from 'react';
// import { Settings, User } from 'lucide-react';

// interface Contacto {
//     numberw: number;
//     name: string;
//     men: string;
//     b1?: string;
//     fecha: string;
// }

// interface ModalProps {
//     numero: number;
// }

// export const ContactosList: React.FC = () => {
//     const [elementoSeleccionado, setElementoSeleccionado] = useState<number | null>(null);

//     const contactos: Contacto[] = [
//         { numberw: 1, name: 'John Doe', men: 'Mensaje 1', b1: "1", fecha: '2024-12-31' },
//         { numberw: 2, name: 'Jane Smith', men: 'Mensaje 2', b1: "0", fecha: '2024-12-30' },
//         { numberw: 3, name: 'Michael Johnson', men: 'Mensaje 3', b1: "0", fecha: '2024-12-29' },
//         { numberw: 4, name: 'Alice Brown', men: 'Mensaje 4', b1: "1", fecha: '2024-12-28' },
//         { numberw: 5, name: 'David Williams', men: 'Mensaje 5', b1: "0", fecha: '2024-12-27' },
//         { numberw: 6, name: 'Emily Davis', men: 'Mensaje 6', b1: "1", fecha: '2024-12-26' },
//         { numberw: 7, name: 'Daniel Lee', men: 'Mensaje 7', b1: "0", fecha: '2024-12-25' },
//         { numberw: 8, name: 'Sophia Wilson', men: 'Mensaje 8', b1: "1", fecha: '2024-12-24' },
//         { numberw: 9, name: 'James Taylor', men: 'Mensaje 9', b1: "0", fecha: '2024-12-23' },
//         { numberw: 10, name: 'Olivia Martin', men: 'Mensaje 10', b1: "1", fecha: '2024-12-22' },
//         { numberw: 7, name: 'Daniel Lee', men: 'Mensaje 7', b1: "0", fecha: '2024-12-25' },
//         { numberw: 8, name: 'Sophia Wilson', men: 'Mensaje 8', b1: "1", fecha: '2024-12-24' },
//         { numberw: 9, name: 'James Taylor', men: 'Mensaje 9', b1: "0", fecha: '2024-12-23' },
//         { numberw: 10, name: 'Olivia Martin', men: 'Mensaje 10', b1: "1", fecha: '2024-12-22' },

//     ];

//     return (
//         <div className="w-full scroolbar h-full overflow-auto  bg-white rounded-xl pb-5 md:pb-2 max-w-[400px] mx-auto">
//             <div className='w-full h-auto pb-2 z-10 bg-gray-200 sticky top-0'>
//                 <div className="flex justify-between h-full items-center px-4 py-2">
//                     <div className="flex items-center gap-4">
//                         <img
//                             className="w-14 h-14 object-cover rounded-full border-gray-300"
//                             src="https://logowik.com/content/uploads/images/live-chat9310.logowik.com.webp"
//                             alt="Usuario"
//                         />
//                         <h1 className="text-xl font-semibold text-gray-800">Hola Admin..</h1>
//                     </div>
//                     <div className="flex items-center">
//                         <Settings />
//                     </div>
//                 </div>

//                 <div className="w-full flex items-center px-4 ">
//                     <input

//                         type="text"
//                         placeholder="Buscar un contacto..."
//                         className="w-full px-4 py-2 bg-gray-100 text-black rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//             </div>

//             {contactos.map((item, index) => (
//                 <div
//                     key={index}
//                     className={`flex gap-3 w-full px-3 py-3 border-b border-gray-200 relative justify-start items-center hover:bg-gray-100 cursor-pointer rounded-lg 
//           ${elementoSeleccionado === item.numberw ? 'bg-gray-100' : ''}`}
//                 >
//                     {/* Avatar */}
//                     <div className='w-[50px] h-[50px] flex justify-center items-center rounded-full bg-gray-200'>
//                         <User size={24} className="text-gray-600" />
//                     </div>

//                     {/* Contact Info */}
//                     <div className='flex-1 ml-3'>
//                         <div className="flex justify-between ">
//                             <span className="text-sm font-medium text-gray-800">{item.name ? item.name : item.numberw}</span>

//                         </div>
//                         <div className="text-sm text-gray-600 mt-1 flex w-full justify-between  ">
//                             {item.men ? item.men : "Archivo Adjunto"}
//                             <span className="text-xs text-gray-500">{item.fecha}</span>
//                         </div>

//                     </div>

//                     {/* Notificación */}
//                     {/* {item.b1 === "1" && (
//                         <div className="absolute bg-red-500 text-white text-xs rounded-full flex justify-center items-center w-5 h-5 right-4 top-3">
//                             <FontAwesomeIcon icon={faFlag} />
//                         </div>
//                     )} */}
//                 </div>
//             ))}
//         </div>
//     );
// };

