import express from 'express';
import { createChannel, getChannelById } from '../controllers/channelController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createChannel);
router.get('/:id', getChannelById);

export default router;
