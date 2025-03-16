import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function SafetyAlerts() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available.");
    }
  }, []);

  const callForHelp = () => {
    window.location.href = "tel:+123456789"; // Replace with real emergency contact
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6"
    >
      <h1 className="text-2xl font-bold mb-6">🚨 Location & Safety</h1>

      {location ? (
        <p className="text-lg">📍 Your Location: <br />
          <span className="text-green-400">Latitude:</span> {location.latitude} <br />
          <span className="text-green-400">Longitude:</span> {location.longitude}
        </p>
      ) : (
        <p className="text-gray-400">⏳ Detecting location...</p>
      )}

      {/* Emergency Help Button */}
      <button onClick={callForHelp} className="feature-button bg-red-500 text-white mt-4">
        ⚠ Call for Help
      </button>

      {/* Back Button */}
      <Link to="/family-portal" className="mt-6 feature-button bg-gray-300 text-blue-900">
        🔙 Back to Family Portal
      </Link>
    </motion.div>
  );
}

export default SafetyAlerts;
