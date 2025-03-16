import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HomeScreen() {
  const [time, setTime] = useState(new Date());
  const [reminder, setReminder] = useState("Doctor Appointment at 3:00 PM");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  let backgroundImage = "";

  if (hour >= 5 && hour < 12) {
    backgroundImage = "url('/images/morning.jpg')";
  } else if (hour >= 12 && hour < 18) {
    backgroundImage = "url('/images/afternoon.jpg')";
  } else if (hour >= 18 && hour < 20) {
    backgroundImage = "url('/images/evening.jpg')";
  } else {
    backgroundImage = "url('/images/night.jpg')";
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center h-screen bg-cover bg-center text-gray-900 transition-all duration-300 w-full max-w-[400px] mx-auto relative overflow-hidden pt-2"
      style={{ backgroundImage }}
    >
      <div className="text-4xl font-bold text-blue-700 bg-white bg-opacity-10 px-6 py-3 rounded-2xl backdrop-blur-lg shadow-lg border border-transparent mt-1">
        <div className="text-2xl mb-1">{time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}</div>
        <div className="text-5xl">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
      </div>

      <div className="p-3 bg-white bg-opacity-20 backdrop-blur-md text-lg text-gray-900 font-semibold rounded-lg shadow-md w-full max-w-sm text-center mt-1">
        📅 {reminder}
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-sm mt-2">
        <HomeButton to="/dialer" icon="📞" label="Call" />
        <HomeButton to="/messages" icon="💬" label="Messages" />
        <HomeButton to="/settings" icon="🛠️" label="Settings" />
        <HomeButton to="/emergency" icon="🚨" label="Emergency" />
      </div>

      <div className="w-full flex justify-center mt-2">
        <HomeButton to="/more" icon="📂" label="More Features" className="w-32 h-32 text-xl" />
      </div>
    </motion.div>
  );
}

const HomeButton = ({ to, icon, label, className = "" }) => (
  <Link to={to} className={`flex flex-col items-center justify-center w-28 h-28 text-xl bg-white bg-opacity-95 hover:bg-opacity-100 border border-gray-500 rounded-2xl shadow-lg transition-all duration-300 p-2 ${className}`}>
    <span className="text-4xl">{icon}</span>
    <span className="mt-2 font-bold text-gray-900">{label}</span>
  </Link>
);

export default HomeScreen;
