import express from 'express';
import {
  createVideo,
  getVideoById,
  updateVideo,
  deleteVideo,
} from '../controllers/videoController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createVideo);
router.get('/:id', getVideoById);
router.put('/:id', authMiddleware, updateVideo);
router.delete('/:id', authMiddleware, deleteVideo);

export default router;
