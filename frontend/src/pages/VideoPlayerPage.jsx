import VideoCard from "../components/VideoCard"; // reusing your VideoCard

export default function VideoPlayerPage() {
  // dummy suggested videos for now
  const suggestedVideos = [
    {
      id: 1,
      title: "Learn React in 10 Minutes",
      thumbnailUrl: "https://via.placeholder.com/400x225",
      channelName: "Code Academy",
      channelAvatar: "/default-avatar.png",
      views: 12000,
      uploadedAt: "2 days ago",
    },
    {
      id: 2,
      title: "Tailwind CSS Crash Course",
      thumbnailUrl: "https://via.placeholder.com/400x225",
      channelName: "Dev Simplified",
      channelAvatar: "/default-avatar.png",
      views: 5600,
      uploadedAt: "1 week ago",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row p-4 gap-6">
      {/* Left Section - Video Player & Details */}
      <div className="flex-1">
        {/* Video Player */}
        <div className="bg-black aspect-video w-full rounded mb-4" />

        {/* Video Info */}
        <h2 className="text-xl font-bold mb-2">Video Title</h2>
        <p className="text-gray-700 mb-4">Channel Name • 10K Views</p>

        {/* Action buttons */}
        <div className="flex items-center gap-4 mb-6">
          <button className="px-4 py-2 bg-gray-200 rounded-full">👍 Like</button>
          <button className="px-4 py-2 bg-gray-200 rounded-full">👎 Dislike</button>
          <button className="px-4 py-2 bg-gray-200 rounded-full">🔗 Share</button>
        </div>

        {/* Comments */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Comments</h3>
          <div className="text-gray-600">Comments section (placeholder)</div>
        </div>
      </div>

      {/* Right Section - Suggested Videos */}
      <div className="w-full lg:w-80 flex-shrink-0">
        <h3 className="font-semibold mb-4">Suggested Videos</h3>
        <div className="space-y-4">
          {suggestedVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
