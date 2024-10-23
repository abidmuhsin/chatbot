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
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-full">
          <iframe
                allow="microphone;"
                width="320"
                height="380"
                src="https://console.dialogflow.com/api-client/demo/embedded/6f4826fb-2662-469a-bc11-a54aa8fcbfe9"
                className=''>
            </iframe>
          </div>
          <button
            onClick={toggleWidget}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
      )}
      <button
        onClick={toggleWidget}
        className="bg-[#f9b67f] hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
};

export default ChatbotWidget;