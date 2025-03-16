import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function PhoneDialer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [recentCalls, setRecentCalls] = useState(["+123456789", "+987654321", "+1122334455"]);
  const [isShowingRecent, setIsShowingRecent] = useState(false);

  const handleButtonClick = (digit) => {
    setPhoneNumber((prev) => prev + digit);
  };

  const handleDelete = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  const handleCall = () => {
    if (phoneNumber.length > 0) {
      alert(`Calling ${phoneNumber}...`);
      setRecentCalls([phoneNumber, ...recentCalls.slice(0, 4)]);
      setPhoneNumber("");
    } else {
      alert("Please enter a number to call.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-gray-900 p-6"
      style={{ backgroundImage: "url('/images/dialer_background.jpg')" }}
    >
      {/* Recent Calls Toggle */}
      <button
        className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all"
        onClick={() => setIsShowingRecent(!isShowingRecent)}
      >
        {isShowingRecent ? "Hide Recent Calls" : "Show Recent Calls"}
      </button>

      {/* Recent Calls */}
      {isShowingRecent && (
        <div className="w-64 bg-white p-4 rounded-lg shadow-md text-center mb-4">
          <h3 className="text-md font-semibold mb-2">Recent Calls</h3>
          <ul className="text-gray-700">
            {recentCalls.map((call, index) => (
              <li key={index} className="p-2 hover:bg-gray-200 rounded cursor-pointer" onClick={() => setPhoneNumber(call)}>
                {call}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display Entered Number with Animation */}
      <div className="text-4xl font-bold mb-4 bg-white p-4 rounded-lg shadow-md w-64 text-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={phoneNumber}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {phoneNumber || "Enter Number"}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Dial Pad */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((digit) => (
          <DialButton key={digit} digit={digit} onClick={() => handleButtonClick(digit)} />
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-4 mt-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleDelete}
          className="px-6 py-3 bg-gray-600 text-white text-2xl rounded-full shadow-md hover:bg-gray-700 transition-all"
        >
          ⌫
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleCall}
          className="px-6 py-3 bg-green-500 text-white text-2xl rounded-full shadow-md hover:bg-green-600 transition-all"
        >
          📞 Call
        </motion.button>
      </div>
    </motion.div>
  );
}

const DialButton = ({ digit, onClick }) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    className="w-20 h-20 text-3xl font-bold bg-blue-500 text-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-600 transition-all"
    onClick={onClick}
  >
    {digit}
  </motion.button>
);

export default PhoneDialer;
