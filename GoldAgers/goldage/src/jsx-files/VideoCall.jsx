import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function VideoCall() {
  const callFamily = () => {
    window.location.href = "tel:+123456789"; // Replace with real number
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6"
    >
      {/* Title with Icon */}
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        🎥 Call Family
      </h1>

      {/* Call Now Button (Text is now BLACK) */}
      <button
        onClick={callFamily}
        className="w-full max-w-xs px-6 py-3 bg-green-300 text-black text-lg font-semibold rounded-lg shadow-lg hover:bg-green-400 transition-all flex items-center justify-center gap-2"
      >
        📞 Call Now
      </button>

      {/* Back Button */}
      <Link
        to="/family-portal"
        className="mt-4 w-full max-w-xs px-6 py-3 bg-gray-200 text-blue-900 text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
      >
        🔙 Back to Family Portal
      </Link>
    </motion.div>
  );
}

export default VideoCall;
