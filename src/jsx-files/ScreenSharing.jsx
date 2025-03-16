import { useState } from "react";
import { motion } from "framer-motion";

function ScreenSharing() {
  const [isSharing, setIsSharing] = useState(false);

  const startScreenShare = () => {
    alert("📲 Screen Sharing Started! Your family can now see your screen.");
    setIsSharing(true);
  };

  const stopScreenShare = () => {
    alert("🛑 Screen Sharing Stopped.");
    setIsSharing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6"
    >
      <h1 className="text-2xl font-bold mb-6">📲 Share My Screen</h1>

      {isSharing ? (
        <button onClick={stopScreenShare} className="feature-button bg-red-500 text-white">
          🛑 Stop Sharing
        </button>
      ) : (
        <button onClick={startScreenShare} className="feature-button bg-green-500 text-white">
          📡 Start Sharing
        </button>
      )}

      {/* Back Button */}
      <Link to="/family-portal" className="feature-button bg-gray-300 text-blue-900 mt-4">
        🔙 Back to Family Portal
      </Link>
    </motion.div>
  );
}

export default ScreenSharing;
