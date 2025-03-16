import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NewsPage() {
  // Sample news data
  const newsArticles = [
    { id: 1, title: "📰 New Health Guidelines Released", content: "The latest health recommendations for seniors include staying hydrated and exercising daily." },
    { id: 2, title: "📉 Economy Update: What Seniors Need to Know", content: "Inflation has slowed down, but how does this affect pensions and healthcare?" },
    { id: 3, title: "🏥 Tips for Managing Medications Safely", content: "Experts share best practices to avoid medication errors." }
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6"
    >
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      {/* Show news list if no article is selected */}
      {!selectedArticle && (
        <div className="w-full max-w-md space-y-4">
          {newsArticles.map((article) => (
            <button
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="feature-button bg-gray-200 text-blue-900 w-full"
            >
              {article.title}
            </button>
          ))}
        </div>
      )}

      {/* Show full article when clicked */}
      {selectedArticle && (
        <div className="w-full max-w-md bg-white text-black p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">{selectedArticle.title}</h2>
          <p id="news-content" className="text-md mb-4">{selectedArticle.content}</p>

          {/* Read Aloud Button */}
          <button onClick={readAloud} className="feature-button bg-blue-500 text-white w-full">
            📢 Read Aloud
          </button>

          {/* Back Button */}
          <button onClick={() => setSelectedArticle(null)} className="feature-button bg-gray-300 text-blue-900 w-full mt-2">
            🔙 Back to News List
          </button>
        </div>
      )}
    </motion.div>
  );
}

// Read Aloud Function
function readAloud() {
  const text = document.getElementById("news-content").innerText;
  const speech = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(speech);
}

export default NewsPage;
