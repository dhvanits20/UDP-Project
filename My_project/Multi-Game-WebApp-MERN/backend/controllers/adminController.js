const User = require('../models/User');
const Game = require('../models/Game');

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Approve developer application
// @route   PUT /api/admin/developers/:id/approve
// @access  Private/Admin
const approveDeveloper = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user && user.developerStatus === 'pending') {
      user.developerStatus = 'approved';
      user.role = 'developer';
      await user.save();
      res.status(200).json({ message: 'Developer approved' });
    } else {
      res.status(404).json({ message: 'Pending developer application not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Approve game submission
// @route   PUT /api/admin/games/:id/approve
// @access  Private/Admin
const approveGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (game) {
      game.isActive = true;
      await game.save();
      res.status(200).json({ message: 'Game approved' });
    } else {
      res.status(404).json({ message: 'Game not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  approveDeveloper,
  approveGame
};
