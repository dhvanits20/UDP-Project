const mongoose = require('mongoose');
const User = require('./models/User');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/multi_game_db')
  .then(async () => {
    console.log('Connected to DB');
    const adminExists = await User.findOne({ email: 'admin@endgame.com' });
    if (!adminExists) {
      await User.create({
        name: 'Super Admin',
        email: 'admin@endgame.com',
        password: 'password123',
        role: 'admin'
      });
      console.log('Admin user seeded successfully!');
    } else {
      console.log('Admin user already exists.');
    }
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
