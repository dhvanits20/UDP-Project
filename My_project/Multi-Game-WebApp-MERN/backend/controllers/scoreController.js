const Score = require('../models/Score');
const Game = require('../models/Game');
const User = require('../models/User');
const mongoose = require('mongoose');

// @desc    Submit a score after playing a game
// @route   POST /api/scores
// @access  Private
const submitScore = async (req, res) => {
  try {
    const { game_id, game_title, score } = req.body;

    const numericScore = Number(score);
    if (isNaN(numericScore) || numericScore <= 0) {
      return res.status(400).json({ message: 'Valid positive score is required' });
    }

    let game = null;

    // Try finding by game_id if provided and valid ObjectId
    if (game_id && mongoose.Types.ObjectId.isValid(game_id)) {
      game = await Game.findById(game_id);
    }

    // Otherwise, try finding by game_title
    if (!game && game_title) {
      game = await Game.findOne({
        title: { $regex: new RegExp(`^${game_title.trim()}$`, 'i') }
      });
    }

    // If still not found, try fallback matching or use the first available game
    if (!game) {
      game = await Game.findOne({
        title: { $regex: new RegExp(game_title || 'game', 'i') }
      });
    }

    if (!game) {
      return res.status(404).json({ message: 'Game not found for scoring' });
    }

    // Create the score entry
    const newScore = await Score.create({
      user_id: req.user._id,
      game_id: game._id,
      score: numericScore
    });

    // Award coins to user (e.g. 1 coin per 10 points, minimum 1 coin)
    const coinsEarned = Math.max(1, Math.floor(numericScore / 10));
    const user = await User.findById(req.user._id);
    if (user) {
      user.coins = (user.coins || 0) + coinsEarned;
      await user.save();
    }

    const populatedScore = await Score.findById(newScore._id)
      .populate('user_id', 'name email')
      .populate('game_id', 'title image_url');

    res.status(201).json({
      success: true,
      score: populatedScore,
      coinsEarned,
      totalCoins: user ? user.coins : 0,
      message: `Score saved! You earned ${coinsEarned} coins.`
    });
  } catch (error) {
    console.error('Error submitting score:', error);
    res.status(500).json({ message: 'Failed to submit score: ' + error.message });
  }
};

// @desc    Get top global scores (Leaderboard)
// @route   GET /api/scores/top
// @access  Public
const getTopScores = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 10;
    const scores = await Score.find()
      .sort({ score: -1, createdAt: -1 })
      .limit(limit)
      .populate('user_id', 'name role')
      .populate('game_id', 'title image_url');

    res.json(scores);
  } catch (error) {
    console.error('Error fetching top scores:', error);
    res.status(500).json({ message: 'Failed to fetch leaderboard' });
  }
};

// @desc    Get current user's score history
// @route   GET /api/scores/my
// @access  Private
const getMyScores = async (req, res) => {
  try {
    const scores = await Score.find({ user_id: req.user._id })
      .sort({ createdAt: -1 })
      .populate('game_id', 'title image_url');

    res.json(scores);
  } catch (error) {
    console.error('Error fetching personal scores:', error);
    res.status(500).json({ message: 'Failed to fetch personal scores' });
  }
};

module.exports = {
  submitScore,
  getTopScores,
  getMyScores
};
