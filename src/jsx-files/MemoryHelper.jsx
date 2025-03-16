import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MemoryHelper() {
  const [currentMemory, setCurrentMemory] = useState(null);

  // Family members data (8 total)
  const familyMembers = [
    {
      name: "Michael",
      relationship: "grandson",
      parent: "Sarah",
      location: "New York",
      job: "doctor",
      lastCall: "3 days ago",
      memory: "He always played chess with you on Sundays.",
      img: "public/images/michael.jpg",
    },
    {
      name: "Sarah",
      relationship: "daughter",
      location: "California",
      job: "teacher",
      lastCall: "yesterday",
      memory: "She loved helping you bake cookies when she was little.",
      img: "public/images/sarah.jpg",
    },
    {
      name: "John",
      relationship: "brother",
      location: "Florida",
      job: "retired engineer",
      lastCall: "last week",
      memory: "You both used to go fishing together every summer.",
      img: "public/images/john.jpg",
    },
    {
      name: "Lily",
      relationship: "granddaughter",
      parent: "David",
      location: "Texas",
      job: "college student",
      lastCall: "2 weeks ago",
      memory: "She always calls you to talk about her school and hobbies.",
      img: "public/images/lily.jpg",
    },
    {
      name: "David",
      relationship: "son",
      location: "Chicago",
      job: "software engineer",
      lastCall: "5 days ago",
      memory: "He helped you fix your phone when you had trouble using it.",
      img: "public/images/david.jpg",
    },
    {
      name: "Ann",
      relationship: "sister",
      location: "Seattle",
      job: "retired nurse",
      lastCall: "1 month ago",
      memory: "She always cared for you when you were sick as a child.",
      img: "public/images/ann.jpg",
    },
    {
      name: "Simon",
      relationship: "nephew",
      parent: "Mark",
      location: "Boston",
      job: "firefighter",
      lastCall: "last weekend",
      memory: "He tells you funny stories about his job when he visits.",
      img: "public/images/simon.jpg",
    },
    {
      name: "Mark",
      relationship: "cousin",
      location: "Denver",
      job: "chef",
      lastCall: "last night",
      memory: "He used to cook your favorite meals during family gatherings.",
      img: "public/images/mark.jpg",
    }
  ];

  // Speak memory details
  const speakMemory = (member) => {
    const message = `${member.name} is your ${member.relationship}.
    ${member.parent ? `They are the child of ${member.parent}.` : ""}
    They live in ${member.location} and work as a ${member.job}.
    You last talked to ${member.name} ${member.lastCall}.
    ${member.memory}`;

    const speech = new SpeechSynthesisUtterance(message);
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;
    speech.lang = "en-US";

    speechSynthesis.speak(speech);
    setCurrentMemory(member);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center h-screen overflow-y-auto bg-gray-100 text-black p-6"
    >
      <h1 className="text-3xl font-bold mb-4">🧠 Memory Helper</h1>

      {/* Family Members List */}
      <div className="w-full max-w-xs">
        {familyMembers.map((member, index) => (
          <button
            key={index}
            onClick={() => speakMemory(member)}
            className="w-full p-3 bg-blue-500 text-black text-lg rounded-lg shadow-md hover:bg-blue-600 transition-all flex items-center mb-3"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-12 h-12 rounded-full mr-3 object-cover"
              onError={(e) => (e.target.src = "/images/default-person.jpg")}
            />
            {member.name} ({member.relationship})
          </button>
        ))}
      </div>

      {/* Memory Display */}
      {currentMemory && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold text-black">{currentMemory.name}</h2>
          <p className="text-md text-black">{currentMemory.memory}</p>
        </div>
      )}

      {/* Back Button */}
      <Link to="/family-portal" className="mt-6 feature-button bg-gray-400 text-black">
        🔙 Back to Family Portal
      </Link>
    </motion.div>
  );
}

export default MemoryHelper;
