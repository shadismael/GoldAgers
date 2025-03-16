import { useState } from "react";
import { motion } from "framer-motion";

function Messages() {
  const [messages, setMessages] = useState([
    { text: "Hey, how are you?", sender: "user", timestamp: "10:30 AM" },
    { text: "I'm good, what about you?", sender: "friend", timestamp: "10:32 AM" },
    { text: "Just working on a project!", sender: "user", timestamp: "10:35 AM" },
    { text: "That sounds cool! Need any help?", sender: "friend", timestamp: "10:36 AM" },
  ]);
  const [input, setInput] = useState("");
  const [draft, setDraft] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showTimestamp, setShowTimestamp] = useState(true);

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = {
        text: input,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  const handleSaveDraft = () => {
    setDraft(input);
    alert("Draft saved!");
  };

  const handleLoadDraft = () => {
    setInput(draft);
  };

  const handleVoiceMessage = () => {
    alert("Voice message feature coming soon!");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-between min-h-screen bg-cover bg-center text-gray-900 p-6"
      style={{ backgroundImage: "url('/images/messages_background.jpg')" }}
    >
      {/* Messages Display */}
      <div className="w-full max-w-md bg-white bg-opacity-80 p-4 rounded-lg shadow-lg h-80 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-3 rounded-lg text-white mb-2 w-fit max-w-xs shadow-md ${
              msg.sender === "user" ? "bg-blue-500 self-end" : "bg-gray-600 self-start"
            }`}
          >
            {msg.text}
            {showTimestamp && <div className="text-xs text-gray-200 mt-1">{msg.timestamp}</div>}
          </motion.div>
        ))}
        {isTyping && <p className="text-gray-500 text-sm mt-2">Typing...</p>}
      </div>

      {/* Input & Buttons */}
      <div className="w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setIsTyping(true);
            setTimeout(() => setIsTyping(false), 2000);
          }}
          className="w-full p-3 text-lg border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-white bg-gray-500 bg-opacity-90"
          placeholder="Type a message..."
        />
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleSendMessage}
        className="mt-2 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition-all"
      >
        📩 Send Message
      </motion.button>
      <div className="flex gap-4 w-full max-w-md mt-3">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleSaveDraft}
          className="flex-1 px-4 py-3 bg-yellow-500 text-white text-lg rounded-lg shadow-md hover:bg-yellow-600 transition-all"
        >
          📝 Save Draft
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleLoadDraft}
          className="flex-1 px-4 py-3 bg-gray-500 text-white text-lg rounded-lg shadow-md hover:bg-gray-600 transition-all"
        >
          📂 Load Draft
        </motion.button>
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleVoiceMessage}
        className="mt-3 px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-md hover:bg-green-600 transition-all"
      >
        🎤 Voice Message
      </motion.button>
    </motion.div>
  );
}

export default Messages;