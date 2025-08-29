import Comment from '../models/Comment.js';

// Add new comment
export const addComment = async (req, res) => {
  try {
    const { videoId, text } = req.body;
    const userId = req.user.userId;

    const newComment = new Comment({ videoId, userId, text });
    await newComment.save();

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch comments by video ID
export const getCommentsByVideo = async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId }).populate('userId', 'username avatar').sort({ createdAt: -1 });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update comment
export const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    if (comment.userId.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to update this comment' });
    }

    comment.text = text;
    await comment.save();

    res.json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete comment
export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    if (comment.userId.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to delete this comment' });
    }

    await Comment.findByIdAndDelete(id);

    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
