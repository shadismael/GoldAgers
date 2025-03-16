import { useState } from "react";
import { motion } from "framer-motion";

function Settings() {
  const [fontSize, setFontSize] = useState("text-lg");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [wifiEnabled, setWifiEnabled] = useState(true);
  const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
  const [hearingAssistance, setHearingAssistance] = useState(false);
  const [emergencyContact, setEmergencyContact] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-start min-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-800 bg-cover bg-center text-white p-6"
      style={{ backgroundImage: "url('/images/settings_background.jpg')" }}
    >
      <h1 className="text-5xl font-bold bg-gray-800 text-white p-4 rounded-lg shadow-md mb-6">🛠️ Settings</h1>

      {/* Font Size Selection */}
      <div className="mb-4 w-full max-w-md bg-gray-700 p-4 rounded-lg shadow-md">
        <label className="block text-lg font-semibold mb-2 text-white">Font Size</label>
        <select
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none text-black"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        >
          <option value="text-sm">Small</option>
          <option value="text-lg">Medium</option>
          <option value="text-xl">Large</option>
          <option value="text-2xl">Extra Large</option>
        </select>
      </div>

      {/* WiFi Toggle */}
      <div className="mb-4 w-full max-w-md bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center">
        <label className="text-lg font-semibold text-white">WiFi</label>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setWifiEnabled(!wifiEnabled)}
          className={`px-6 py-2 rounded-lg text-white text-lg transition-all shadow-md ${wifiEnabled ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}
        >
          {wifiEnabled ? "ON" : "OFF"}
        </motion.button>
      </div>

      {/* Bluetooth Toggle */}
      <div className="mb-4 w-full max-w-md bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center">
        <label className="text-lg font-semibold text-white">Bluetooth</label>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setBluetoothEnabled(!bluetoothEnabled)}
          className={`px-6 py-2 rounded-lg text-white text-lg transition-all shadow-md ${bluetoothEnabled ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}
        >
          {bluetoothEnabled ? "ON" : "OFF"}
        </motion.button>
      </div>

      {/* Hearing Assistance Toggle */}
      <div className="mb-4 w-full max-w-md bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center">
        <label className="text-lg font-semibold text-white">Hearing Assistance</label>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setHearingAssistance(!hearingAssistance)}
          className={`px-6 py-2 rounded-lg text-white text-lg transition-all shadow-md ${hearingAssistance ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}
        >
          {hearingAssistance ? "ON" : "OFF"}
        </motion.button>
      </div>

      {/* Sound Toggle */}
      <div className="mb-4 w-full max-w-md bg-gray-700 p-4 rounded-lg shadow-md flex justify-between items-center">
        <label className="text-lg font-semibold text-white">Sound Effects</label>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`px-6 py-2 rounded-lg text-white text-lg transition-all shadow-md ${soundEnabled ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}
        >
          {soundEnabled ? "ON" : "OFF"}
        </motion.button>
      </div>

      {/* Emergency Contact Input */}
      <div className="mb-4 w-full max-w-md bg-gray-700 p-4 rounded-lg shadow-md">
        <label className="block text-lg font-semibold mb-2 text-white">Emergency Contact</label>
        <input
          type="tel"
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none text-black"
          placeholder="Enter emergency number"
          value={emergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
        />
      </div>

      {/* Save Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition-all"
      >
        Save Settings
      </motion.button>
    </motion.div>
  );
}

export default Settings;
