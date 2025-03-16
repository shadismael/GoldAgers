import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function BankingPage() {
  const [pin, setPin] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [balance, setBalance] = useState(1250.75);
  const [transactions, setTransactions] = useState([
    { type: "Received", amount: 500, date: "March 5, 2025", color: "green" },
    { type: "Sent", amount: 100, date: "March 2, 2025", color: "red" },
    { type: "Bill Paid", amount: 75, date: "February 28, 2025", color: "orange" },
  ]);

  const savedContacts = [
    { name: "Michael", account: "****1234" },
    { name: "Sarah", account: "****5678" },
    { name: "John", account: "****9012" },
  ];

  // Handle PIN login
  const handlePinEntry = (digit) => {
    if (pin.length < 4) {
      setPin(pin + digit);
    }
  };

  // Verify PIN
  const verifyPin = () => {
    if (pin === "1234") {
      setIsLoggedIn(true);
      setPin("");
    } else {
      alert("❌ Incorrect PIN. Try again!");
      setPin("");
    }
  };

  // Send Money
  const sendMoney = (contact) => {
    const amount = parseFloat(prompt(`Enter amount to send to ${contact.name}:`));
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      setBalance(balance - amount);
      setTransactions([
        { type: `Sent to ${contact.name}`, amount, date: new Date().toLocaleDateString(), color: "red" },
        ...transactions,
      ]);
    } else {
      alert("❌ Invalid amount or insufficient balance.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center h-screen overflow-y-auto bg-gray-100 text-black p-6"
    >
      <h1 className="text-3xl font-bold mb-4">🏦 Simplified Banking</h1>

      {/* PIN Entry Screen */}
      {!isLoggedIn && (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-black mb-3">🔐 Enter PIN</h2>
          <div className="flex justify-center gap-2 text-2xl font-bold mb-3">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="w-6 h-6 bg-gray-300 rounded-full">{pin[i] ? "•" : ""}</span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "✔️"].map((num, i) => (
              <button
                key={i}
                onClick={() => num === "✔️" ? verifyPin() : handlePinEntry(num)}
                className="p-3 bg-blue-500 text-black text-xl rounded-lg shadow-md hover:bg-blue-600 transition-all"
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Banking Screen */}
      {isLoggedIn && (
        <>
          {/* Balance Display */}
          <div className="bg-white p-5 rounded-lg shadow-lg text-center mb-4">
            <h2 className="text-xl font-semibold text-black">💰 Account Balance</h2>
            <p className="text-3xl font-bold text-black">${balance.toFixed(2)}</p>
          </div>

          {/* Quick Transfers */}
          <div className="bg-white p-5 rounded-lg shadow-lg text-center mb-4">
            <h2 className="text-lg font-semibold text-black">📤 Send Money</h2>
            {savedContacts.map((contact, index) => (
              <button
                key={index}
                onClick={() => sendMoney(contact)}
                className="w-full mt-2 p-3 bg-blue-500 text-black text-lg rounded-lg shadow-md hover:bg-blue-600 transition-all"
              >
                {contact.name} ({contact.account})
              </button>
            ))}
          </div>

          {/* Transaction History */}
          <div className="bg-white p-5 rounded-lg shadow-lg text-center mb-4">
            <h2 className="text-lg font-semibold text-black">📜 Recent Transactions</h2>
            <ul className="text-left mt-2">
              {transactions.map((txn, index) => (
                <li key={index} className="p-2 rounded-lg mb-2 shadow-md text-black bg-gray-200">
                  {txn.type}: <strong>${txn.amount.toFixed(2)}</strong> - {txn.date}
                </li>
              ))}
            </ul>
          </div>

          {/* Pay Bills */}
          <div className="bg-white p-5 rounded-lg shadow-lg text-center mb-4">
            <h2 className="text-lg font-semibold text-black">🧾 Pay Bills</h2>
            <button
              onClick={() => alert("✅ Electricity Bill Paid!")}
              className="w-full mt-2 p-3 bg-orange-500 text-black text-lg rounded-lg shadow-md hover:bg-orange-600 transition-all"
            >
              ⚡ Pay Electricity Bill ($50)
            </button>
            <button
              onClick={() => alert("✅ Water Bill Paid!")}
              className="w-full mt-2 p-3 bg-blue-500 text-black text-lg rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
              💧 Pay Water Bill ($40)
            </button>
          </div>
        </>
      )}

      {/* Back Button */}
      <Link to="/more" className="mt-6 feature-button bg-gray-400 text-black">
        🔙 Back to Features
      </Link>
    </motion.div>
  );
}

export default BankingPage;
