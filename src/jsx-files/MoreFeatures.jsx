import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function MoreFeatures() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6"
    >
      <h1 className="text-3xl font-bold mb-6">More Features</h1>

      <div className="flex flex-col gap-3 w-full max-w-xs">
        {/* Read Aloud Button - All text in blue */}
        <Link to="/news" className="feature-button bg-indigo-200 text-blue-900">📢 Read News</Link>

        {/* Exercise Videos */}
        <Link to="/exercise-videos" className="feature-button bg-green-200 text-blue-900">🏋️‍♂️ Exercise Videos</Link>

        {/* One-Click Healthcare */}
        <button onClick={callHealthcare} className="feature-button bg-cyan-200 text-blue-900">🏥 Call Healthcare</button>

        {/* Health Concerns Tool */}
        <Link to="/health-concerns" className="feature-button bg-yellow-200 text-blue-900">
  🩺 Health Concerns
</Link>

        {/* Smart Magnifier Tool */}
        <button onClick={enableMagnifier} className="feature-button bg-orange-200 text-blue-900">🔍 Smart Magnifier</button>

        {/* Family Portal */}
        <Link to="/family-portal" className="feature-button bg-gray-200 text-blue-900">
  👨‍👩‍👧‍👦 Family Portal
</Link>

        {/* Wisdom Exchange Platform */}
        <Link to="/wisdom-exchange" className="feature-button bg-orange-300 text-blue-900">
  📖 Wisdom Exchange
</Link>

        {/* Grocery Delivery */}
        <Link to="/grocery-delivery" className="feature-button bg-pink-300 text-blue-900">
  🛒 Grocery Delivery
</Link>

        {/* Banking Interface */}
        <Link to="/banking" className="feature-button bg-teal-200 text-blue-900">🏦 Simplified Banking</Link>
      </div>
    </motion.div>
  );
}

// Read Aloud Function
function readAloud() {
  const text = document.body.innerText;
  const speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}

// Call Healthcare Function
function callHealthcare() {
  window.location.href = "tel:123456789";
}

// Enable Magnifier Function
function enableMagnifier() {
  document.body.style.zoom = "1.5";
}

export default MoreFeatures;
