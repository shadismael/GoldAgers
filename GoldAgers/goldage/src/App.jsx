import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./jsx-files/HomeScreen";
import PhoneDialer from "./jsx-files/PhoneDialer";
import Messages from "./jsx-files/Messages";
import Settings from "./jsx-files/Settings";
import Emergency from "./jsx-files/Emergency";
import MoreFeatures from "./jsx-files/MoreFeatures";  // ADD THIS LINE
import NewsPage from "./jsx-files/NewsPage";  // Import the new page
import ExercisePage from "./jsx-files/ExercisePage";
import HealthConcerns from "./jsx-files/HealthConcerns";
import FamilyPortal from "./jsx-files/FamilyPortal";
import ScreenSharing from "./jsx-files/ScreenSharing";
import VideoCall from "./jsx-files/VideoCall";
import MemoryHelper from "./jsx-files/MemoryHelper";
import SafetyAlerts from "./jsx-files/SafetyAlerts";
import MoodCheck from "./jsx-files/MoodCheck";
import WisdomExchange from "./jsx-files/WisdomExchange";
import GroceryDelivery from "./jsx-files/GroceryDelivery";
import BankingPage from "./jsx-files/BankingPage";


function App() {
  return (
    <Router>
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-80 h-[90vh] bg-blue-100 rounded-[2rem] shadow-xl overflow-hidden border-[14px] border-gray-900">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/dialer" element={<PhoneDialer />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/more" element={<MoreFeatures />} />  
            <Route path="/news" element={<NewsPage />} />
            <Route path="/exercise-videos" element={<ExercisePage />} />
            <Route path="/health-concerns" element={<HealthConcerns />} />
            <Route path="/family-portal" element={<FamilyPortal />} />
            <Route path="/memory-helper" element={<MemoryHelper />} />
<Route path="/safety-alerts" element={<SafetyAlerts />} />
<Route path="/mood-check" element={<MoodCheck />} />
<Route path="/screen-sharing" element={<ScreenSharing />} />
<Route path="/video-call" element={<VideoCall />} />
<Route path="/wisdom-exchange" element={<WisdomExchange />} />
<Route path="/grocery-delivery" element={<GroceryDelivery />} />
<Route path="/banking" element={<BankingPage />} />



          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
