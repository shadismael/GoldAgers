import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MoodCheck() {
  const [mood, setMood] = useState(null);

  // Load the saved mood when the page loads
  useEffect(() => {
    const savedMood = localStorage.getItem("elderlyMood");
    if (savedMood) {
      setMood(savedMood);
    }
  }, []);

  // Function to update mood and send to "family members"
  const selectMood = (selectedMood) => {
    setMood(selectedMood);
    localStorage.setItem("elderlyMood", selectedMood); // Simulating sending data

    // Simulate sending a message to family
    alert(`📢 Mood update sent to all family members: "${selectedMood}"`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6"
    >
      <h1 className="text-2xl font-bold mb-6">📊 Mood & Wellness Check</h1>

      {/* Display Current Mood */}
      {mood && (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center mb-4">
          <p className="text-lg font-bold">Current Mood:</p>
          <p className="text-2xl">{mood}</p>
        </div>
      )}

      {/* Mood Selection Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => selectMood("😊 Happy")} className="feature-button bg-green-300 text-black">
          😊 Happy
        </button>
        <button onClick={() => selectMood("😐 Okay")} className="feature-button bg-yellow-300 text-black">
          😐 Okay
        </button>
        <button onClick={() => selectMood("😔 Sad")} className="feature-button bg-blue-300 text-black">
          😔 Sad
        </button>
        <button onClick={() => selectMood("🤒 Sick")} className="feature-button bg-red-300 text-black">
          🤒 Sick
        </button>
      </div>

      {/* Back Button */}
      <Link to="/family-portal" className="mt-6 feature-button bg-gray-300 text-blue-900">
        🔙 Back to Family Portal
      </Link>
    </motion.div>
  );
}

export default MoodCheck;
