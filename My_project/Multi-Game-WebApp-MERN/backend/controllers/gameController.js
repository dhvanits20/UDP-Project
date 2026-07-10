const Game = require('../models/Game');

// @desc    Get all active games
// @route   GET /api/games
// @access  Public
const getGames = async (req, res) => {
  try {
    const games = await Game.find({ isActive: true }).populate('developerId', 'name');
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single game
// @route   GET /api/games/:id
// @access  Public
const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id).populate('developerId', 'name');
    if (game) {
      res.status(200).json(game);
    } else {
      res.status(404).json({ message: 'Game not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getGames,
  getGameById
};
