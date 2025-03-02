import React from 'react';

const ChatMessage = ({ message, time, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 items-end gap-2`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-[#0A0821] font-bold">
          J
        </div>
      )}
      <div className={`max-w-[70%] ${isUser ? 'bg-[#2A2751]' : 'bg-[#1E1B3F]'} rounded-lg p-4`}>
        <p className="text-white">{message}</p>
        <p className="text-gray-400 text-sm mt-2">{time}</p>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
