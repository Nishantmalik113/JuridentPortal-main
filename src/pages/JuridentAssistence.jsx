import { useState } from "react";
import { ArrowLeft, Send, Image, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import ChatMessage from "../components/ChatMessage";
import Navbar from "../components/Navbar";

export default function SupportChat() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="background-circle circle-1 z-0"></div>
      <div className="background-circle circle-2 z-0"></div>
      <main className="px-4 md:px-16 py-8">
      <div className="min-h-screen bg-[#0A0821] flex flex-col p-12">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard" className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-yellow-500">Support Chat</h1>
        </div>

        <div className="flex-1 px-2 pt-2 overflow-y-auto">
          <ChatMessage
            message="Hey, I need help!"
            time="08:15 AM"
            isUser={true}
          />
          <ChatMessage
            message="Good morning! How Can I Help?"
            time="08:20 AM"
          />
          <ChatMessage
            message="I need to know the statute of limitations for a personal injury claim."
            time="08:22 AM"
            isUser={true}
          />
          <ChatMessage
            message="The statute of limitations varies depending on the state where the injury occurred."
            time="08:23 AM"
          />
        </div>

        <div className="p-4">
          <div className="flex max-w-xl mx-auto bg-[#424245FF]/50 backdrop-blur-sm rounded-xl p-2 w-full">
            <div className="flex gap-2">
              <button className="p-2 hover:bg-[#2A2751] rounded-full transition-colors">
                <Image className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-[#2A2751] rounded-full transition-colors">
                <Mic className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="flex items-center gap-3 bg-[#e4e3e6] rounded-xl px-4 py-1 w-full">
              <input
                type="text"
                placeholder="Type here..."
                className="flex-1 bg-transparent text-black outline-none min-w-0"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
            </div>

            <button
              onClick={handleSend}
              className="p-2 hover:bg-[#2A2751] rounded-full transition-colors"
            >
              <Send className="w-5 h-5 text-[#FFD700]" />
            </button>
          </div>
        </div>
      </div>
      </main>
      
    </>
  );
}
