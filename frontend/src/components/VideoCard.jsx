export default function VideoCard({ video }) {
  return (
    <div className="w-full cursor-pointer">
      {/* Thumbnail Section */}
      <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg bg-gray-200">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="flex mt-3">
        {/* Channel Avatar */}
        <img
          src={video.channelAvatar || "/default-avatar.png"}
          alt={video.channelName}
          className="w-10 h-10 rounded-full mr-3"
        />

        {/* Video Info */}
        <div className="flex flex-col">
          {/* Title */}
          <h3 className="text-sm font-semibold line-clamp-2 leading-snug">
            {video.title}
          </h3>

          {/* Channel Name */}
          <p className="text-xs text-gray-600 hover:text-gray-800">
            {video.channelName}
          </p>

          {/* Views + Upload Time */}
          <p className="text-xs text-gray-600">
            {video.views.toLocaleString()} views • {video.uploadedAt}
          </p>
        </div>
      </div>
    </div>
  );
}
