import { BiMessageAlt } from "react-icons/bi"; 
import { MdKeyboardVoice } from "react-icons/md"; 
// import React, { useState, useEffect } from 'react';
// import { MessageCircle, X } from 'lucide-react';

// const ChatBot = () => {
//   const [showBotOptions, setShowBotOptions] = useState(false); // Untuk memunculkan dua tombol pilihan
//   const [selectedBot, setSelectedBot] = useState(''); // Untuk menentukan bot mana yang dipilih
//   const [isOpen, setIsOpen] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false);

//   // Memasukkan script Dialogflow Messenger ketika komponen di-mount
//   useEffect(() => {
//     if (selectedBot === 'dialogflow' && !document.getElementById('df-messenger')) {
//       const script = document.createElement('script');
//       script.id = 'df-messenger';
//       script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, [selectedBot]);

//   // Gunakan useEffect untuk mengatur interval toggle untuk animasi (hanya untuk chatbot widget)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowAnimation(prevState => !prevState);
//     }, 5000); // 5000 ms = 5 detik

//     // Bersihkan interval ketika komponen tidak lagi digunakan
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Tombol utama yang akan memunculkan dua pilihan */}
//       {!showBotOptions && (
//         <button
//           onClick={() => setShowBotOptions(true)}
//           className="bg-[#eb7310] hover:bg-[#eb7310] text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
//         >
//           <MessageCircle size={24} />
//         </button>
//       )}

//       {/* Ketika tombol utama ditekan, munculkan dua tombol pilihan bot */}
//       {showBotOptions && (
//         <div className="flex space-x-2 mb-4">
//           <button
//             onClick={() => setSelectedBot('dialogflow')}
//             className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${
//               selectedBot === 'dialogflow' ? 'bg-blue-700' : ''
//             }`}
//           >
//             Dialogflow Bot
//           </button>

//           <button
//             onClick={() => setSelectedBot('chatbot')}
//             className={`bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded ${
//               selectedBot === 'chatbot' ? 'bg-green-700' : ''
//             }`}
//           >
//             Chatbot Widget
//           </button>
//         </div>
//       )}

//       {/* Widget Bot */}
//       {selectedBot === 'dialogflow' && (
//         <div className="fixed bottom-28 right-4 z-50">
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
//       )}

//       {selectedBot === 'chatbot' && (
//         <div className="fixed bottom-4 right-4 z-50">
//           {/* Widget Chatbot */}
//           <div
//             className={`fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 ease-in-out ${
//               isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
//             }`}
//             style={{ transformOrigin: 'bottom' }} // Transisi muncul dari bawah
//           >
//             <div className="h-full">
//               <iframe
//                 allow="microphone;"
//                 width="100%"
//                 height="100%"
//                 src="https://console.dialogflow.com/api-client/demo/embedded/6f4826fb-2662-469a-bc11-a54aa8fcbfe9"
//                 className="border-none"
//                 title="Chatbot"
//               />
//             </div>
//             {/* Tombol untuk menutup widget */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           {/* Tombol untuk membuka widget */}
//           <div className="relative flex items-center">
//             {/* Pesan teks di sebelah tombol */}
//             <div
//               id="animation"
//               className={`w-60 h-8 bg-orange-500 z-0 absolute bottom-2 rounded-xl right-7 flex justify-center items-center text-white font-bold transition-opacity duration-75 ease-in-out ${
//                 showAnimation ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <h1 className="text-sm">Yuk, Tanya Data Statistik</h1>
//             </div>

//             {/* Tombol untuk membuka widget */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="bg-[#eb7310] hover:bg-[#eb7310] text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
//             >
//               <MessageCircle size={24} />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatBot;



// import React, { useState } from 'react';

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleButtons = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative h-screen bg-gray-100 flex justify-center items-center">
//       {/* Main Floating Button */}
//       <button
//         onClick={toggleButtons}
//         className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
//       >
//         +
//       </button>

//       {/* Extra Buttons */}
//       {isOpen && (
//         <div className="fixed bottom-20 right-6 flex flex-col space-y-4">
//           <button className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600">
//             Button 1
//           </button>
//           <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600">
//             Button 2
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false); // Kontrol tombol tambahan
  const [showMessenger, setShowMessenger] = useState(false); // Kontrol tampilan Dialogflow Messenger
  const [showDemo, setShowDemo] = useState(false); // Kontrol tampilan Dialogflow Web Demo
  const [fadeOut, setFadeOut] = useState(false); // State untuk kontrol fade

  // Mengatur interval untuk memudarkan elemen setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut((prev) => !prev); // Toggle fadeOut setiap 5 detik
    }, 5000); // 5000 ms = 5 detik

    return () => clearInterval(interval); // Membersihkan interval saat unmount
  }, []);

  const handleMainButtonClick = () => {
    if (!isOpen) {
      setShowMessenger(true); // Menampilkan Dialogflow Messenger
      const messenger = document.querySelector('df-messenger');
      if (messenger) {
        messenger.style.display = 'block'; // Menampilkan messenger
      }
    } else {
      setShowMessenger(false); // Menyembunyikan Dialogflow Messenger
      const messenger = document.querySelector('df-messenger');
      if (messenger) {
        messenger.style.display = 'none'; // Menyembunyikan messenger
      }
    }
    setIsOpen(!isOpen); // Toggle tombol tambahan
  };

  const handleButton1Click = () => {
    setShowDemo(true); // Tampilkan Dialogflow Web Demo
  };

  return (
    <div className="relative h-screen bg-gray-100 flex justify-center items-center">
      {/* Main Floating Button */}
      <div
        id="float"
        className={`bg-[#eb7310] w-52 fixed bottom-8 shadow-lg right-[120px] h-10 rounded-xl flex items-center justify-center transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`} // Menambahkan kelas opacity
      >
        <h1 className="text-sm text-white font-bold">Yuk, Tanya Data Statistik</h1>
      </div>

      <button
        onClick={handleMainButtonClick}
        className="fixed bottom-6 right-20 bg-[#eb7310] text-white p-4 rounded-full shadow-lg hover:bg-orange-700 focus:outline-none"
      >
        <BiMessageAlt className="text-2xl" />
      </button>

      {/* Extra Buttons */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 flex flex-col space-y-4">
          <button
            onClick={handleButton1Click}
            className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600"
          >
            <MdKeyboardVoice className="text-2xl" />
          </button>
        </div>
      )}

      {/* Dialogflow Web Demo */}
      {showDemo && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <iframe
              title="Dialogflow Web Demo"
              src="https://console.dialogflow.com/api-client/demo/embedded/6f4826fb-2662-469a-bc11-a54aa8fcbfe9"
              className="w-[400px] h-[500px] border-none"
            ></iframe>
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatBot;







