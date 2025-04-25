import React from "react";

interface ChatBotProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, setIsOpen }) => {

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-30 left-2 z-50 rounded-full bg-primary text-white px-3 py-1 shadow-md hover:bg-primary-dark"
      >
        {isOpen ? "Close Chat" : "Open Chat"}
      </button>

      {isOpen && (
        <div className="w-1/3 border-r border-gray-300 p-4 overflow-y-auto bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Chat</h2>
          <div className="space-y-4">
            <div className="bg-white p-3 rounded shadow">
              <p className="text-sm text-gray-700">User: Hello!</p>
            </div>
            <div className="bg-gray-200 p-3 rounded shadow">
              <p className="text-sm text-gray-700">Bot: Hi there! How can I help you today?</p>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <p className="text-sm text-gray-700">User: Tell me what is Novalyze.ai</p>
            </div>
            <div className="bg-gray-200 p-3 rounded shadow">
              <p className="text-sm text-gray-700">Bot: Amazing company</p>
            </div>
          </div>

          {/* Input */}
          <div className="mt-4">
            <input
              type="text"
              className="w-full rounded border border-gray-300 p-2"
              placeholder="Type a message..."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
