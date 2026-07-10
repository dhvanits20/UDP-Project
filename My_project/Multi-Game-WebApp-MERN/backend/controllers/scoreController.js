const Score = require('../models/Score');

// @desc    Submit game score
// @route   POST /api/scores
// @access  Private
const submitScore = async (req, res) => {
  try {
    const { gameId, score } = req.body;

    if (!gameId || score === undefined) {
      return res.status(400).json({ message: 'Please provide gameId and score' });
    }

    const newScore = await Score.create({
      gameId,
      userId: req.user.id,
      score,
    });

    res.status(201).json(newScore);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user scores
// @route   GET /api/scores/my-scores
// @access  Private
const getMyScores = async (req, res) => {
  try {
    const scores = await Score.find({ userId: req.user.id }).populate('gameId', 'title');
    res.status(200).json(scores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  submitScore,
  getMyScores
};
