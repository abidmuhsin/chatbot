// import React, { useState, useEffect } from "react";

// const ChatbotWidget = () => {
//   const [isWidgetVisible, setIsWidgetVisible] = useState(false);

//   // Fungsi untuk memunculkan/menghilangkan widget
//   const toggleWidget = () => {
//     setIsWidgetVisible(!isWidgetVisible);
//   };

//   useEffect(() => {
//     if (isWidgetVisible) {
//       // Menambahkan script Dialogflow ketika widget aktif
//       const script = document.createElement("script");
//       script.src =
//         "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, [isWidgetVisible]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       {/* Tombol untuk memunculkan widget */}
//       <button
//         onClick={toggleWidget}
//         className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
//       >
//         {isWidgetVisible ? "Hide Chatbot" : "Show Chatbot"}
//       </button>

//       {/* Widget Dialogflow muncul jika isWidgetVisible true */}
//       {isWidgetVisible && (
//         <df-messenger
//           intent="WELCOME"
//           chat-title="Assistant"
//           agent-id="your-agent-id"
//           language-code="id"
//           chat-icon="https://icon-library.com/images/chat-icon/chat-icon-8.jpg"
//         ></df-messenger>
//       )}
//     </div>
//   );
// };

// export default ChatbotWidget;

// src/App.js

// import React, { useState } from 'react';

// const ChatbotWidget = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     const toggleWidget = () => {
//       setIsVisible(!isVisible);
//     };
  
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <button
//           onClick={toggleWidget}
//           className="flex items-center justify-center w-16 h-16 text-white bg-blue-500 rounded-full hover:bg-blue-600 shadow-lg transition duration-300"
//         >
//           <i className="fa fa-comments text-2xl"></i>
//         </button>
  
//         {isVisible && (
//           <div className="mt-4">
//             <iframe
//               title="Dialogflow Widget"
//               src="https://console.dialogflow.com/api-client/demo/embedded/YOUR_AGENT_ID"
//               width="350"
//               height="500"
//               className="border rounded"
//             ></iframe>
//           </div>
//         )}
//       </div>
//     );
//   };

// export default ChatbotWidget;

// src/App.js

// import React, { useState } from 'react';
// import { MessageCircle, X } from 'lucide-react';

// const ChatbotWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleWidget = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="fixed bottom-4 right-4">
//       {isOpen && (
//         <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="h-full">
//           <iframe
//                 allow="microphone;"
//                 width="320"
//                 height="380"
//                 src="https://console.dialogflow.com/api-client/demo/embedded/6f4826fb-2662-469a-bc11-a54aa8fcbfe9"
//                 className=''>
//             </iframe>
//           </div>
//           <button
//             onClick={toggleWidget}
//             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           >
//             <X size={20} />
//           </button>
//         </div>
//       )}
//       <div className='flex items-center'>
//         <div className='w-60 h-8 bg-orange-500 z-0 absolute bottom-2 rounded-xl right-7 flex justify-center items-center text-white font-bold '>
//           <h1 className='text-sm'>Yuk, Tanya Data Statistik</h1>
//         </div>
//         <button
//           onClick={toggleWidget}
//           className="bg-[#eb7310] hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
//         >
//           <MessageCircle className='' size={24} />
//         </button>
//         </div>
//     </div>
//   );
// };

// export default ChatbotWidget;


import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  // Gunakan useEffect untuk mengatur interval toggle untuk animasi
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAnimation(prevState => !prevState);
    }, 5000); // 5000 ms = 5 detik

    // Bersihkan interval ketika komponen tidak lagi digunakan
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Widget Chatbot */}
      <div
        className={`fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        style={{ transformOrigin: 'bottom' }} // Transisi muncul dari bawah
      >
        <div className="h-full">
          <iframe
            allow="microphone;"
            width="100%"
            height="100%"
            src="https://console.dialogflow.com/api-client/demo/embedded/6f4826fb-2662-469a-bc11-a54aa8fcbfe9"
            className="border-none"
            title="Chatbot"
          />
        </div>
        {/* Tombol untuk menutup widget */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>

      {/* Tombol untuk membuka widget */}
      <div className="relative flex items-center">
        {/* Pesan teks di sebelah tombol */}
        <div
          id='animation'
          className={`w-60 h-8 bg-orange-500 z-0 absolute bottom-2 rounded-xl right-7 flex justify-center items-center text-white font-bold transition-opacity duration-75 ease-in-out ${
            showAnimation ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-sm">Yuk, Tanya Data Statistik</h1>
        </div>

        {/* Tombol untuk membuka widget */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#eb7310] hover:bg-[#eb7310] text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatbotWidget;

// import React, { useState, useEffect } from 'react';
// import { MessageCircle, X } from 'lucide-react';

// const ChatbotWidget = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false);

//   useEffect(() => {
//     // Add Dialogflow Messenger script
//     const script = document.createElement('script');
//     script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
//     script.async = true;
//     document.body.appendChild(script);

//     // Animation interval
//     const interval = setInterval(() => {
//       setShowAnimation(prevState => !prevState);
//     }, 5000);

//     return () => {
//       clearInterval(interval);
//       // Cleanup script when component unmounts
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Widget Chatbot */}
//       <div
//         className={`fixed bottom-20 right-4 w-96 h-[600px] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ease-in-out ${
//           isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//         }`}
//         style={{ transformOrigin: 'bottom' }}
//       >
//         <df-messenger
//           intent="WELCOME"
//           chat-title="Asisten Statistik"
//           agent-id="6f4826fb-2662-469a-bc11-a54aa8fcbfe9"
//           language-code="id"
//           chat-icon="https://example.com/path-to-your-icon.png"
//           allow-input-microphone="true"
//           start-open="true"
//         ></df-messenger>
        
//         {/* Tombol untuk menutup widget */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-50 bg-white rounded-full p-2"
//         >
//           <X size={24} />
//         </button>
//       </div>

//       {/* Tombol untuk membuka widget */}
//       <div className="relative flex items-center">
//         {/* Pesan teks di sebelah tombol */}
//         <div
//           id='animation'
//           className={`w-64 h-10 bg-orange-500 z-0 absolute bottom-2 rounded-xl right-7 flex justify-center items-center text-white font-bold transition-opacity duration-75 ease-in-out ${
//             showAnimation ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <h1 className="text-base">Yuk, Tanya Data Statistik</h1>
//         </div>

//         {/* Tombol untuk membuka widget */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="bg-[#eb7310] hover:bg-[#eb7310] text-white rounded-full p-4 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
//         >
//           <MessageCircle size={28} />
//         </button>
//       </div>

//       {/* Styles for Dialogflow Messenger */}
//       <style jsx global>{`
//         df-messenger {
//           z-index: 999;
//           position: relative;
//           width: 100%;
//           height: 100%;
//         }
        
//         df-messenger::part(chat-wrapper) {
//           width: 100% !important;
//           height: 100% !important;
//           max-height: none !important;
//           max-width: none !important;
//         }

//         df-messenger::part(chatElement) {
//           height: 100% !important;
//         }

//         df-messenger::part(minimized) {
//           display: none;
//         }

//         df-messenger::part(chat-button) {
//           display: none;
//         }

//         df-messenger::part(header) {
//           background-color: #eb7310;
//           padding: 16px;
//         }

//         df-messenger::part(message-list) {
//           height: calc(100% - 120px) !important;
//         }

//         /* Styling untuk mic button */
//         df-messenger::part(mic-button) {
//           background-color: #eb7310;
//           margin-right: 8px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ChatbotWidget;








