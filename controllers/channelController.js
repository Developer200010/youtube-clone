import Channel from '../models/channelModel.js';

// Create a new channel
export const createChannel = async (req, res) => {
  try {
    const { channelName, description, channelBanner } = req.body;
    const owner = req.user.userId; // Assuming you get user from JWT middleware

    // Check if channel name exists
    const existingChannel = await Channel.findOne({ channelName });
    if (existingChannel) {
      return res.status(400).json({ message: 'Channel name already exists' });
    }

    const newChannel = new Channel({
      channelName,
      owner,
      description,
      channelBanner,
      subscribers: 0,
      videos: []
    });

    await newChannel.save();

    res.status(201).json(newChannel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get channel by ID
export const getChannelById = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id).populate('videos');
    if (!channel) return res.status(404).json({ message: 'Channel not found' });

    res.json(channel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
