import React, { useState } from 'react';
import DialogflowMessengerButton from './DialogflowMessengerButton';
import ChatbotWidget from './ChatbotWidget';

const BotToggleButton = () => {
  const [selectedBot, setSelectedBot] = useState(''); // Awalnya tidak ada bot yang dipilih

  const handleSelectBot = (bot) => {
    setSelectedBot(bot); // Memilih bot berdasarkan tombol yang diklik
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Tombol pemilih bot */}
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => handleSelectBot('dialogflow')}
          className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${
            selectedBot === 'dialogflow' ? 'bg-blue-700' : ''
          }`}
        >
          Dialogflow Bot
        </button>

        <button
          onClick={() => handleSelectBot('chatbot')}
          className={`bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded ${
            selectedBot === 'chatbot' ? 'bg-green-700' : ''
          }`}
        >
          Chatbot Widget
        </button>
      </div>

      {/* Komponen bot ditampilkan berdasarkan pilihan */}
      {selectedBot === 'dialogflow' && <DialogflowMessengerButton />}
      {selectedBot === 'chatbot' && <ChatbotWidget />}
    </div>
  );
};

export default BotToggleButton;
