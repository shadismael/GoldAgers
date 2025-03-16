import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HealthConcerns() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6"
    >
      <h1 className="text-2xl font-bold mb-6">🩺 Health Concerns</h1>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        {/* Symptom Checker */}
        <Link to="/symptom-checker" className="feature-button bg-indigo-200 text-blue-900">
          🩹 Symptom Checker
        </Link>

        {/* Emergency Self-Check Guide */}
        <Link to="/emergency-check" className="feature-button bg-red-200 text-blue-900">
          🚨 Emergency Self-Check
        </Link>

        {/* Common Health Issues & Prevention */}
        <Link to="/health-tips" className="feature-button bg-yellow-200 text-blue-900">
          📚 Health Tips & Prevention
        </Link>

        {/* Medicine & Side Effects Checker */}
        <Link to="/medicine-checker" className="feature-button bg-green-200 text-blue-900">
          💊 Medicine Side Effects
        </Link>

        {/* Daily Health Reminders */}
        <Link to="/daily-reminders" className="feature-button bg-teal-200 text-blue-900">
          ⏳ Daily Health Reminders
        </Link>

        {/* When to Call a Doctor Guide */}
        <Link to="/when-to-call" className="feature-button bg-orange-200 text-blue-900">
          ☎️ When to Call a Doctor
        </Link>

        {/* One-Click Call for Help */}
        <button onClick={callForHelp} className="feature-button bg-gray-200 text-blue-900">
          📞 Call for Help
        </button>
      </div>

      {/* Back Button */}
      <Link to="/more" className="mt-6 feature-button bg-gray-300 text-blue-900">🔙 Back to Features</Link>
    </motion.div>
  );
}

// Call for Help Function (Replace with real number)
function callForHelp() {
  window.location.href = "tel:123456789";
}

export default HealthConcerns;
