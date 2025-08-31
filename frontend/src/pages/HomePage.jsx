// src/pages/HomePage.jsx
import { useState } from "react";
import VideoCard from "../components/VideoCard";

const sampleVideos = [
  {
    videoId: "video01",
    title: "Learn React in 30 Minutes",
    thumbnailUrl: "https://example.com/thumbnails/react30min.png",
    channelName: "Code With John",
    channelAvatar: "https://example.com/avatar/john.png",
    views: 15200,
  },
  // Add more sample videos similarly
];

const filters = ["All", "Music", "Gaming", "News", "Sports", "Education"];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="p-4">
      <div className="flex space-x-4 overflow-x-auto mb-5">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap ${
              activeFilter === filter
                ? "bg-red-600 text-white border-red-600"
                : "bg-gray-200 text-gray-800 border-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleVideos.map((video) => (
          <VideoCard key={video.videoId} video={video} />
        ))}
      </div>
    </div>
  );
}
