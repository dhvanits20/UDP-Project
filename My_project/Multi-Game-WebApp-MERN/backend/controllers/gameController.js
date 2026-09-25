const Game = require('../models/Game');
const Category = require('../models/Category');

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

module.exports = { getGames, getGameById, getCategories };
