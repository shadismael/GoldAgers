import { useState } from "react";
import { motion } from "framer-motion";

function Emergency() {
  const [emergencyNumber, setEmergencyNumber] = useState("911");
  const emergencyTips = [
    "🫁 Take slow, deep breaths to stay calm.",
    "💧 Drink water if you are feeling dizzy.",
    "🩹 Apply pressure to stop bleeding if injured.",
    "🪑 Sit down if you feel lightheaded or weak.",
    "📞 Call emergency services if necessary!"
  ];
  
  const sosContacts = ["Shady", "Amni", "Zenab", "Hamza"];

  const handleCall = () => {
    alert(`Calling emergency contact: ${emergencyNumber}`);
  };

  const handleSMS = () => {
    alert(`Sending emergency SMS to: ${emergencyNumber}`);
  };

  const handleCallAll = () => {
    alert(`Calling all SOS contacts: ${sosContacts.join(", ")}`);
  };

  const updateEmergencyNumber = (contact) => {
    setEmergencyNumber(contact);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-6"
      style={{ backgroundImage: "url('/images/emergency_background.jpg')" }}
    >
      <div className="bg-gray-700 text-white text-4xl font-extrabold p-3 rounded-lg shadow-md mb-6">
        🚨 Emergency
      </div>
      
      {/* Emergency Number Display */}
      <div className="text-3xl font-bold mb-4 bg-red-700 p-4 rounded-2xl shadow-lg w-64 text-center border-4 border-white">
        {emergencyNumber}
      </div>
      
      {/* Call & SMS Buttons */}
      <div className="flex gap-6 mt-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleCall}
          className="px-6 py-3 bg-green-500 text-white text-xl rounded-xl shadow-lg hover:bg-green-600 transition-all"
        >
          📞 Call
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleSMS}
          className="px-6 py-3 bg-yellow-500 text-white text-xl rounded-xl shadow-lg hover:bg-yellow-600 transition-all"
        >
          ✉️ SMS
        </motion.button>
      </div>
      
      {/* Call All SOS Contacts Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleCallAll}
        className="mt-4 px-6 py-3 bg-red-500 text-white text-xl rounded-xl shadow-lg hover:bg-red-600 transition-all"
      >
        📢 Call All
      </motion.button>
      
      {/* SOS Contacts Section */}
      <div className="mt-8 bg-gray-700 p-4 rounded-2xl shadow-lg max-w-md text-center h-40 overflow-y-auto">
        <h2 className="text-xl font-semibold text-white mb-2">🆘 SOS Contacts</h2>
        <ul className="text-md text-white space-y-2">
          {sosContacts.map((contact, index) => (
            <li 
              key={index} 
              className="bg-gray-600 p-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-500 transition-all"
              onClick={() => updateEmergencyNumber(contact)}
            >
              {contact}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Emergency Tips Section */}
      <div className="mt-8 bg-gray-700 p-4 rounded-2xl shadow-lg max-w-md text-center h-40 overflow-y-auto">
        <h2 className="text-xl font-semibold text-white mb-2">🛟 Emergency Tips</h2>
        <ul className="text-md text-white space-y-2">
          {emergencyTips.map((tip, index) => (
            <li key={index} className="bg-gray-600 p-2 rounded-lg shadow-md">{tip}</li>
          ))}
        </ul>
      </div>
      
      {/* Inhale-Exhale Breathing Animation */}
      <div className="mt-8 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-white mb-3">🫁 Breathe In & Out</h2>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-md font-bold shadow-md"
        >
          Inhale
        </motion.div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mt-3 text-md text-white"
        >
          Exhale
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Emergency;
