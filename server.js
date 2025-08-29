import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import channelRoutes from "./routes/channelRoutes.js"
import videoRoutes from './routes/videoRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use("/api/channel", channelRoutes)
app.use('/api/videos', videoRoutes);



// Test route
app.get('/', (req, res) => {
  res.send('YouTube Clone Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
