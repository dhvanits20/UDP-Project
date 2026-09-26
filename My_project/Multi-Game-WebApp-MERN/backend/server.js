const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

const path = require('path');

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Serve static uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const authRoutes = require('./routes/authRoutes');
const gameRoutes = require('./routes/gameRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const developerRoutes = require('./routes/developerRoutes');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/developer', developerRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
