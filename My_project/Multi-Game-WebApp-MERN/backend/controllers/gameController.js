const Game = require('../models/Game');
const Category = require('../models/Category');
const Review = require('../models/Review');
const User = require('../models/User');

// Get all games
const getGames = async (req, res) => {
  try {
    const games = await Game.find({ status: 'public' }).populate('category_id', 'name slug');
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get single game by ID
const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id).populate('category_id', 'name slug');
    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ message: 'Game not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get reviews for a specific game
const getGameReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ game_id: req.params.id })
      .populate('user_id', 'name')
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching game reviews:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create or update a review for a game (with 15 coin reward)
const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const gameId = req.params.id;
    const userId = req.user._id;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be an integer between 1 and 5' });
    }

    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    let review = await Review.findOne({ game_id: gameId, user_id: userId });
    let isNewReview = false;

    if (review) {
      // Update existing review
      review.rating = Number(rating);
      review.comment = comment ? comment.trim() : '';
      await review.save();
    } else {
      // Create new review
      review = await Review.create({
        game_id: gameId,
        user_id: userId,
        rating: Number(rating),
        comment: comment ? comment.trim() : ''
      });
      isNewReview = true;

      // Award 15 coins for sharing their first review for this game
      await User.findByIdAndUpdate(userId, { $inc: { coins: 15 } });
    }

    await review.populate('user_id', 'name');

    const updatedUser = await User.findById(userId).select('coins');

    res.status(201).json({
      message: isNewReview ? 'Review submitted! +15 Coins awarded 🪙' : 'Review updated successfully',
      review,
      coinsAwarded: isNewReview ? 15 : 0,
      totalCoins: updatedUser ? updatedUser.coins : 0
    });
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({ message: 'Failed to submit review' });
  }
};

module.exports = { getGames, getGameById, getCategories, getGameReviews, createReview };

