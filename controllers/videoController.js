import Video from '../models/videoModel.js';

// Create Video
export const createVideo = async (req, res) => {
  try {
    const { title, description, channelId, thumbnailUrl, videoUrl } = req.body;
    const uploader = req.user.userId;

    const newVideo = new Video({
      title,
      description,
      channelId,
      uploader,
      thumbnailUrl,
      videoUrl,
      views: 0,
      likes: 0,
      dislikes: 0,
      uploadDate: new Date(),
    });

    await newVideo.save();

    res.status(201).json(newVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch Video by ID
export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Video not found' });
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Video
export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Video not found' });

    if (video.uploader.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to update this video' });
    }

    await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.json({ message: 'Video updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Video
export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ message: 'Video not found' });

    if (video.uploader.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this video' });
    }

    await Video.findByIdAndDelete(req.params.id);

    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
