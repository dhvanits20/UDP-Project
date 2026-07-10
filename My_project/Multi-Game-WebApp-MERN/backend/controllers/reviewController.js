const Review = require('../models/Review');

// @desc    Get reviews for a game
// @route   GET /api/reviews/:gameId
// @access  Public
const getReviewsByGame = async (req, res) => {
  try {
    const reviews = await Review.find({ gameId: req.params.gameId }).populate('userId', 'name');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getReviewsByGame
};
