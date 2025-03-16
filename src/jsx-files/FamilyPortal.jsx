import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function FamilyPortal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6"
    >
      <h1 className="text-2xl font-bold mb-6">👨‍👩‍👧‍👦 Family Portal</h1>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        {/* Share My Screen */}
        <Link to="/screen-sharing" className="feature-button bg-blue-200 text-blue-900">
          📲 Share My Screen
        </Link>

        {/* Call a Family Member */}
        <Link to="/video-call" className="feature-button bg-green-200 text-blue-900">
          🎥 Call Family
        </Link>

        {/* Memory Helper */}
        <Link to="/memory-helper" className="feature-button bg-orange-200 text-blue-900">
          🖼️ Memory Helper
        </Link>

        {/* Location & Safety */}
        <Link to="/safety-alerts" className="feature-button bg-red-200 text-blue-900">
          🚨 Location & Safety
        </Link>

        {/* Mood & Wellness Check */}
        <Link to="/mood-check" className="feature-button bg-gray-200 text-blue-900">
          📊 Mood & Wellness
        </Link>

        {/* Back to Features */}
        <Link to="/more" className="feature-button bg-gray-300 text-blue-900">
          🔙 Back to Features
        </Link>
      </div>
    </motion.div>
  );
}

export default FamilyPortal;
