import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ExercisePage() {
  // User selection states
  const [ageGroup, setAgeGroup] = useState("");
  const [healthCondition, setHealthCondition] = useState("");
  const [exerciseDuration, setExerciseDuration] = useState("");
  const [seatedOnly, setSeatedOnly] = useState(false);

  // Sample exercise videos
  const exerciseVideos = [
    // 🏋️‍♂️ General Exercises (No Health Condition)
    { id: 1, title: "Gentle Yoga for Seniors", age: "60-70", health: "none", duration: "short", seated: false, videoId: "v7AYKMP6rOE" },
    { id: 2, title: "Low Impact Cardio Workout", age: "70-80", health: "none", duration: "medium", seated: false, videoId: "Ev6yE55kYGw" },
    { id: 3, title: "Seated Full-Body Workout", age: "80+", health: "none", duration: "short", seated: true, videoId: "ybVMu31DLQU" },
  
    // 🩺 Cervical Disc Exercises
    { id: 4, title: "Chair Exercises for Neck Pain", age: "60-70", health: "Cervical Disc", duration: "short", seated: true, videoId: "8BcPHWGQO44" },
    { id: 5, title: "Gentle Stretching for Cervical Disc Relief", age: "70-80", health: "Cervical Disc", duration: "medium", seated: false, videoId: "5pPimUP3sRA" },
  
    // 🏥 Prolapsed Disc Exercises
    { id: 6, title: "Stretching for Back Pain Relief", age: "60-70", health: "Prolapsed Disc", duration: "long", seated: false, videoId: "EiRfQW-81yg" },
  
    // 🦵 Osteoarthritis (Joint Pain)
    { id: 7, title: "Gentle Knee Strengthening", age: "70-80", health: "Osteoarthritis", duration: "short", seated: false, videoId: "NA7vbnI_mD0" },
  
    // 🦴 Osteoporosis (Bone Weakness)
    { id: 8, title: "Low-Impact Bone Strength Exercises", age: "60-70", health: "Osteoporosis", duration: "medium", seated: false, videoId: "8B-fh9HnWZc" },
  
    // 🔴 Hypertension (High Blood Pressure)
    { id: 9, title: "Blood Pressure Friendly Cardio", age: "70-80", health: "Hypertension", duration: "short", seated: true, videoId: "3pGYoWgrmGA" },
  
    // 🩸 Diabetes (Circulation & Mobility)
    { id: 10, title: "Circulation Boosting Workout", age: "60-70", health: "Diabetes", duration: "medium", seated: false, videoId: "5HXmHjnp7kA" },
  
    // 💓 Heart Disease (Low-Intensity Workout)
    { id: 11, title: "Safe Heart-Healthy Walking Workout", age: "70-80", health: "Heart Disease", duration: "long", seated: false, videoId: "tBEB5x5NY-c" },
  
    // 🧠 Parkinson’s Disease (Balance & Mobility)
    { id: 12, title: "Balance & Coordination Exercises", age: "60-70", health: "Parkinson’s Disease", duration: "short", seated: true, videoId: "U5H2N3Yp4uY" },
  
    // ⚡ Stroke Recovery (Gentle Mobility)
    { id: 13, title: "Post-Stroke Gentle Movements", age: "70-80", health: "Stroke Recovery", duration: "medium", seated: true, videoId: "Eb_d5xjBa9I" },
  
    // 🪑 Extra Seated Exercises for Elderly with Limited Mobility
    { id: 14, title: "Simple Seated Stretches", age: "70-80", health: "none", duration: "short", seated: true, videoId: "lYqk35WoBtM" },
    { id: 15, title: "Full Seated Workout for Seniors", age: "80+", health: "none", duration: "medium", seated: true, videoId: "ft2r8wZmQ9s" }
  ];
  

  // Filter exercises based on user selection
  const filteredExercises = exerciseVideos.filter(video => {
    return (
      (ageGroup === "" || video.age === ageGroup) &&
      (healthCondition === "" || video.health === healthCondition || video.health === "none") &&
      (exerciseDuration === "" || video.duration === exerciseDuration) &&
      (!seatedOnly || video.seated === true)
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4"
    >
      <h1 className="text-2xl font-bold mb-4"> Exercise Guide</h1>

      {/* Filter Section */}
      <div className="bg-gray-800 p-3 rounded-lg shadow-md mb-4 w-full max-w-md text-sm">
        <h2 className="text-md font-semibold mb-2 text-gray-300">📌 Choose Your Preferences:</h2>

        {/* Age Group Selection */}
        <label className="block font-semibold text-gray-300">👴 Age Group:</label>
        <select onChange={(e) => setAgeGroup(e.target.value)} className="filter-select">
          <option value="">All Ages</option>
          <option value="60-70">60-70</option>
          <option value="70-80">70-80</option>
          <option value="80+">80+</option>
        </select>

        {/* Health Condition Selection */}
        <label className="block font-semibold text-gray-300 mt-2">🩺 Health Condition:</label>
            <select onChange={(e) => setHealthCondition(e.target.value)} className="filter-select">
                <option value="">No Condition</option>
                <option value="Cervical Disc">Cervical Disc</option>
                <option value="Prolapsed Disc">Prolapsed Disc</option>
                <option value="Osteoarthritis">Osteoarthritis</option>
                <option value="Osteoporosis">Osteoporosis</option>
                <option value="Hypertension">Hypertension</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Heart Disease">Heart Disease</option>
                <option value="Parkinson’s Disease">Parkinson’s Disease</option>
                <option value="Stroke Recovery">Stroke Recovery</option>
</select>

        {/* Exercise Duration */}
        <label className="block font-semibold text-gray-300 mt-2">⏳ Duration:</label>
        <select onChange={(e) => setExerciseDuration(e.target.value)} className="filter-select">
          <option value="">Any Duration</option>
          <option value="short">Short (5-10 min)</option>
          <option value="medium">Medium (10-20 min)</option>
          <option value="long">Long (20+ min)</option>
        </select>

        {/* Seated Only Toggle */}
        <div className="mt-2 flex items-center">
          <input type="checkbox" onChange={(e) => setSeatedOnly(e.target.checked)} className="mr-2" />
          <label className="text-gray-300 text-sm">🪑 Seated Exercises Only</label>
        </div>
      </div>

      {/* Display Filtered Exercises */}
      <div className="w-full max-w-md space-y-3">
        {filteredExercises.length > 0 ? (
          filteredExercises.map(video => (
            <div key={video.id} className="bg-gray-200 text-blue-900 p-3 rounded-lg shadow-md text-center text-sm">
              <h3 className="font-bold">{video.title}</h3>
              <iframe
                width="100%"
                height="160"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center text-sm">⚠ No exercises found for your selection.</p>
        )}
      </div>

      {/* Back Button */}
      <Link to="/more" className="mt-4 feature-button bg-gray-300 text-blue-900 text-sm">🔙 Back to Features</Link>
    </motion.div>
  );
}

export default ExercisePage;
