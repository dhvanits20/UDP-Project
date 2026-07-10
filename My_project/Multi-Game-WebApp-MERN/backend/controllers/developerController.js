const Game = require('../models/Game');
const User = require('../models/User');

// @desc    Submit a new game request
// @route   POST /api/developer/games
// @access  Private/Developer
const submitGame = async (req, res) => {
  try {
    const { title, description, playUrl, thumbnailUrl } = req.body;

    const game = await Game.create({
      title,
      description,
      playUrl,
      thumbnailUrl,
      developerId: req.user.id,
      isActive: false // Requires admin approval
    });

    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get developer's own games
// @route   GET /api/developer/games
// @access  Private/Developer
const getMyGames = async (req, res) => {
  try {
    const games = await Game.find({ developerId: req.user.id });
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Apply to become a developer
// @route   POST /api/developer/apply
// @access  Private
const applyDeveloper = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    if (user.developerStatus === 'pending' || user.developerStatus === 'approved') {
      return res.status(400).json({ message: 'Application already submitted or approved' });
    }

    user.developerStatus = 'pending';
    user.portfolioUrl = req.body.portfolioUrl;
    user.experience = req.body.experience;
    await user.save();

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  submitGame,
  getMyGames,
  applyDeveloper
};
