import { useState } from "react";
import VideoCard from "../components/VideoCard";
import { sampleVideos } from "../../sampleVideo.js";
import { Link } from "react-router-dom";

const filters = ["All", "Music", "Gaming", "News", "Sports", "Education"];

export default function HomePage({ setSidebarMode }) {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="p-4">
      {/* Filter buttons */}
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

      {/* Video grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleVideos.map((video) => (
          <Link
            key={video.videoId}
            to={`/video/${video.videoId}`}
            onClick={() => setSidebarMode("hidden")} // hide sidebar when video opens
          >
            <VideoCard video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
}
