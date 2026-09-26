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

      // Create the game
      await Game.create({
        title: submission.title,
        category_id: submission.category_id,
        description: submission.description,
        image_url: submission.image_url,
        game_file: submission.game_file,
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

// Get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({}).populate('user_id', 'name').populate('game_id', 'title').sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
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

// Update Game (Admin)
const updateGame = async (req, res) => {
  try {
    const { title, status } = req.body;
    const game = await Game.findById(req.params.id);

    if (game) {
      game.title = title || game.title;
      game.status = status || game.status;
      
      const updatedGame = await game.save();
      // Populate category to return consistent data format
      await updatedGame.populate('category_id', 'name');
      res.json(updatedGame);
    } else {
      res.status(404).json({ message: 'Game not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getUsers, getSubmissions, approveSubmission, getAdminDashboard, getAllReviews, deleteReview, updateGame };
