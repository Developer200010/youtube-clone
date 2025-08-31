import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import ChannelPage from "./pages/ChannelPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="flex h-screen">
        <Sidebar />
          <main className="flex-1 bg-gray-50 overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/video/:videoId" element={<VideoPlayerPage />} />
              <Route path="/channel/:channelId" element={<ChannelPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
      </div>
    </Router>
  );
}
