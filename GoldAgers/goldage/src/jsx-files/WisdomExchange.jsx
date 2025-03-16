import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function WisdomExchange() {
  const [textMemory, setTextMemory] = useState("");
  const [savedMemories, setSavedMemories] = useState([]);
  const [audioURL, setAudioURL] = useState(null);
  const [recording, setRecording] = useState(false);
  let mediaRecorder;
  let audioChunks = [];

  // Save text memory
  const saveTextMemory = () => {
    if (textMemory.trim() === "") return;
    setSavedMemories([...savedMemories, { type: "text", content: textMemory }]);
    setTextMemory("");
  };

  // Start Recording Audio
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);
      audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        const audioURL = URL.createObjectURL(audioBlob);
        setAudioURL(audioURL);
        setSavedMemories([...savedMemories, { type: "audio", content: audioURL }]);
      };

      mediaRecorder.start();
      setRecording(true);
      setTimeout(() => {
        mediaRecorder.stop();
        setRecording(false);
      }, 5000); // Record for 5 seconds
    } catch (error) {
      console.error("Error recording audio:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-200 text-black p-6"
    >
      <h1 className="text-3xl font-bold mb-6">📖 Wisdom for My Dear Family</h1>

      {/* Record Audio */}
      <button
        onClick={startRecording}
        className={`feature-button ${recording ? "bg-red-500" : "bg-green-500"} text-black mb-4`}
      >
        🎙️ {recording ? "Recording..." : "Record Voice Memory"}
      </button>

      {/* Text Memory Input */}
      <textarea
        value={textMemory}
        onChange={(e) => setTextMemory(e.target.value)}
        placeholder="Write a memory or life tip..."
        className="w-full max-w-xs p-3 text-lg bg-white text-black border border-gray-600 rounded-lg shadow-md"
      ></textarea>

      <button onClick={saveTextMemory} className="feature-button bg-blue-300 text-black mt-2">
        💾 Save Text Memory
      </button>

      {/* Display Saved Memories */}
      <div className="mt-6 w-full max-w-xs bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-2">🗂️ Saved Memories</h2>
        {savedMemories.length === 0 ? (
          <p className="text-gray-700">No memories saved yet.</p>
        ) : (
          <ul className="text-black space-y-3">
            {savedMemories.map((memory, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-lg">
                {memory.type === "text" ? (
                  <p>✍️ {memory.content}</p>
                ) : (
                  <audio controls>
                    <source src={memory.content} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Back Button */}
      <Link to="/more" className="mt-6 feature-button bg-gray-400 text-black">
        🔙 Back to Features
      </Link>
    </motion.div>
  );
}

export default WisdomExchange;
