const User = require('../models/User');
const Review = require('../models/Review');
const Score = require('../models/Score');

// Get User Profile
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Update User Profile
const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Get User Reviews
const getUserReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ user_id: req.user._id }).populate('game_id', 'title');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get User Dashboard Data
const getUserDashboard = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'User not found. Please log in again.' });
    }
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(401).json({ message: 'User profile not found. Please log in again.' });
    }
    const scores = await Score.find({ user_id: req.user._id }).populate('game_id', 'title').sort({ createdAt: -1 });
    const reviews = await Review.find({ user_id: req.user._id }).populate('game_id', 'title').sort({ createdAt: -1 });
    
    res.json({
      user,
      scores: scores || [],
      reviews: reviews || []
    });
  } catch (error) {
    console.error('getUserDashboard error:', error);
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

module.exports = { getUserProfile, updateUserProfile, getUserReviews, getUserDashboard };
