// src/components/VideoCard.jsx
export default function VideoCard({ video }) {
  return (
    <div className="w-full cursor-pointer">
      <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg bg-gray-200">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex mt-3 space-x-3">
        <img
          src={video.channelAvatar || "/default-avatar.png"}
          alt={video.channelName}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold line-clamp-2">{video.title}</h3>
          <p className="text-xs text-gray-600">{video.channelName}</p>
          <p className="text-xs text-gray-600">{video.views.toLocaleString()} views</p>
        </div>
      </div>
    </div>
  );
}
