// import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';

// const DialogflowMessengerButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Memasukkan script Dialogflow Messenger ketika komponen di-mount
//   useEffect(() => {
//     // Cek apakah script sudah ada di dokumen
//     if (!document.getElementById('df-messenger')) {
//       const script = document.createElement('script');
//       script.id = 'df-messenger';
//       script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []); // Efek dijalankan satu kali ketika komponen di-mount

//   return (
//     <div className="fixed bottom-28 right-4 z-50">
//       {/* Tombol untuk membuka widget Dialogflow Messenger */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 mb-4"
//       >
//         Buka Dialogflow Messenger
//       </button>

//       {/* Widget Dialogflow Messenger */}
//       {isOpen && (
//         <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ease-in-out">
//           {/* Dialogflow Messenger Widget */}
//           <df-messenger
//             intent="WELCOME"
//             chat-title="Chatbot"
//             agent-id="your-agent-id"
//             language-code="en"
//           ></df-messenger>

//           {/* Tombol untuk menutup widget */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           >
//             <X size={20} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DialogflowMessengerButton;

// import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';

// const DialogflowMessengerButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Memasukkan script Dialogflow Messenger ketika komponen di-mount
//   useEffect(() => {
//     if (!document.getElementById('df-messenger')) {
//       const script = document.createElement('script');
//       script.id = 'df-messenger';
//       script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div className="fixed bottom-28 right-4 z-50">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 mb-4"
//       >
//         Buka Dialogflow Messenger
//       </button>

//       {isOpen && (
//         <div className="">
//           <df-messenger
//             intent="WELCOME"
//             chat-title="BPSKotaPalu"
//             agent-id="6f4826fb-2662-469a-bc11-a54aa8fcbfe9"
//             language-code="id"
//           ></df-messenger>

//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           >
//             <X size={20} />
//           </button>
//         </div>
//        )} 
//     </div>
//   );
// };

// export default DialogflowMessengerButton;

// import React, { useState, useEffect } from 'react';
// import { X } from 'lucide-react';

// const DialogflowMessengerButton = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Memasukkan script Dialogflow Messenger ketika komponen di-mount
//   useEffect(() => {
//     // Cek apakah script sudah ada di dokumen
//     if (!document.getElementById('df-messenger')) {
//       const script = document.createElement('script');
//       script.id = 'df-messenger';
//       script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []); // Efek dijalankan satu kali ketika komponen di-mount

//   return (
//     <div className="fixed bottom-28 right-4 z-50">
//       {/* Tombol untuk membuka widget Dialogflow Messenger */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 mb-4"
//       >
//         Buka Dialogflow Messenger
//       </button>

//       {/* Widget Dialogflow Messenger */}
//       {isOpen && (
//         <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ease-in-out">
//           {/* Dialogflow Messenger Widget */}
//           <df-messenger
//             intent="WELCOME"
//             chat-title="Chatbot"
//             agent-id="your-agent-id"
//             language-code="en"
//           ></df-messenger>

//           {/* Tombol untuk menutup widget */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           >
//             <X size={20} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DialogflowMessengerButton;

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const DialogflowMessengerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Memasukkan script Dialogflow Messenger ketika komponen di-mount
  useEffect(() => {
    if (!document.getElementById('df-messenger')) {
      const script = document.createElement('script');
      script.id = 'df-messenger';
      script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="fixed bottom-28 right-4 z-50">
        <div className="">
          <df-messenger
            intent="WELCOME"
            chat-title="BPSKotaPalu"
            agent-id="6f4826fb-2662-469a-bc11-a54aa8fcbfe9"
            language-code="id"
          ></df-messenger>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
    </div>
  );
};

export default DialogflowMessengerButton;

