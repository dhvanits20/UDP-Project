const GameSubmission = require('../models/GameSubmission');
const Game = require('../models/Game');
const User = require('../models/User');

// Get Developer Dashboard
const getDeveloperDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const myGames = await Game.find({ developer_id: req.user._id });
    const mySubmissions = await GameSubmission.find({ developer_email: user.email }); // Simplified match
    
    const totalGames = myGames.length;
    const pendingSubmissions = mySubmissions.filter(s => s.status === 'pending').length;
    
    res.json({
      user,
      totalGames,
      totalPlays: 0,
      totalReviews: 0,
      pendingSubmissions,
      myGames,
      mySubmissions
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Submit a game
const submitGame = async (req, res) => {
  try {
    const { title, category_id, description, image_url, game_file, developer_name, developer_email } = req.body;
    
    const submission = await GameSubmission.create({
      title,
      category_id,
      description,
      image_url,
      game_file,
      developer_name,
      developer_email
    });

    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { submitGame, getDeveloperDashboard };
