const mongoose = require('mongoose');
const Game = require('./models/Game');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/multi_game_db')
  .then(async () => {
    console.log('Connected to DB');
    await Game.updateOne({ title: 'Tic Tac Toe' }, { image_url: '/assets/img/games/screenshot_tictactoe.png' });
    await Game.updateOne({ title: 'Chess' }, { image_url: '/assets/img/games/OIP.jpg' });
    console.log('Updated game images successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
