const User = require('../models/User');
const GameSubmission = require('../models/GameSubmission');
const Game = require('../models/Game');
const Score = require('../models/Score');
const Review = require('../models/Review');

// Get Admin Dashboard Stats
const getAdminDashboard = async (req, res) => {
  try {
    const totalGames = await Game.countDocuments();
    const totalPlayers = await User.countDocuments({ role: { $in: ['player', 'user'] } });
    const totalDevelopers = await User.countDocuments({ role: 'developer' });
    const pendingSubmissions = await GameSubmission.countDocuments({ status: 'pending' });
    
    // Dynamic revenue calculation based on active users and games
    const totalRevenue = (totalPlayers * 50) + (totalGames * 100);
    const grossRevenue = Math.round(totalRevenue * 1.3);
    const totalLoss = grossRevenue - totalRevenue;

    const recentGames = await Game.find().populate('category_id', 'name').sort({ createdAt: -1 }).limit(5);
    const topScores = await Score.find().populate('user_id', 'name').populate('game_id', 'title').sort({ score: -1 }).limit(10);

    res.json({
      user: req.user,
      totalGames,
      totalPlayers,
      totalDevelopers,
      pendingSubmissions,
      totalRevenue,
      grossRevenue,
      totalLoss,
      recentGames,
      topScores
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all submissions
const getSubmissions = async (req, res) => {
  try {
    const submissions = await GameSubmission.find({}).populate('category_id', 'name');
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Approve submission
const approveSubmission = async (req, res) => {
  try {
    const submission = await GameSubmission.findById(req.params.id);
    if (submission) {
      submission.status = 'approved';
      await submission.save();

      // Find developer user if registered
      const devUser = await User.findOne({ email: submission.developer_email?.trim().toLowerCase() });

      // Create the game
      await Game.create({
        title: submission.title,
        category_id: submission.category_id,
        description: submission.description,
        image_url: submission.image_url,
        game_file: submission.game_file,
        developer_id: devUser ? devUser._id : undefined,
        developer_email: submission.developer_email,
        status: 'public'
      });

      res.json({ message: 'Submission approved and Game created' });
    } else {
      res.status(404).json({ message: 'Submission not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Reject submission
const rejectSubmission = async (req, res) => {
  try {
    const submission = await GameSubmission.findById(req.params.id);
    if (submission) {
      submission.status = 'rejected';
      await submission.save();
      res.json({ message: 'Submission marked as rejected' });
    } else {
      res.status(404).json({ message: 'Submission not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all reviews with deep population for title, image, category
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
      .populate('user_id', 'name email')
      .populate({
        path: 'game_id',
        select: 'title image_url category_id status',
        populate: { path: 'category_id', select: 'name slug' }
      })
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    console.error('Error in getAllReviews:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a review
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (review) {
      await review.deleteOne();
      res.json({ message: 'Review removed' });
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all games for Admin (including private, pending, etc.)
const getAllGamesAdmin = async (req, res) => {
  try {
    const games = await Game.find({}).populate('category_id', 'name slug').sort({ createdAt: -1 });
    res.json(games);
  } catch (error) {
    console.error('Error fetching all games for admin:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a Game
const deleteGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    // Clean up related reviews and scores
    await Review.deleteMany({ game_id: game._id });
    await Score.deleteMany({ game_id: game._id });
    await game.deleteOne();

    res.json({ message: 'Game and related scores/reviews removed successfully' });
  } catch (error) {
    console.error('Error deleting game:', error);
    res.status(500).json({ message: 'Failed to delete game' });
  }
};

// Delete a User (with protection against self-deletion)
const deleteUser = async (req, res) => {
  try {
    const targetUserId = req.params.id;

    if (req.user._id.toString() === targetUserId) {
      return res.status(400).json({ message: 'Cannot delete your own admin account' });
    }

    const user = await User.findById(targetUserId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Clean up reviews and scores for this user
    await Review.deleteMany({ user_id: user._id });
    await Score.deleteMany({ user_id: user._id });
    await user.deleteOne();

    res.json({ message: 'User account removed successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Failed to delete user' });
  }
};

// Update Game (Admin)
const updateGame = async (req, res) => {
  try {
    const { title, status } = req.body;
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    if (title && title.trim()) {
      game.title = title.trim();
    }
    if (status) {
      game.status = status;
    }
    
    const updatedGame = await game.save();
    // Populate category to return consistent data format
    await updatedGame.populate('category_id', 'name');
    res.json(updatedGame);
  } catch (error) {
    console.error('Error updating game:', error);
    res.status(500).json({ message: error.message || 'Failed to update game' });
  }
};

module.exports = {
  getUsers,
  getSubmissions,
  approveSubmission,
  rejectSubmission,
  getAdminDashboard,
  getAllReviews,
  deleteReview,
  getAllGamesAdmin,
  deleteGame,
  deleteUser,
  updateGame
};
