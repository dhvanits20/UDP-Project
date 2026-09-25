const mongoose = require('mongoose');
const Category = require('../models/Category');
const Game = require('../models/Game');
const User = require('../models/User');

const seedDatabase = async () => {
  try {
    const categoryCount = await Category.countDocuments();
    if (categoryCount === 0) {
      console.log('Seeding initial data...');
      
      // Create Categories
      const catStrategy = await Category.create({ name: 'Strategy', slug: 'strategy' });
      const catBoard = await Category.create({ name: 'Board Games', slug: 'board-games' });
      const catAction = await Category.create({ name: 'Action', slug: 'action' });
      
      // Create Games
      await Game.create({
        title: 'Tic Tac Toe',
        category_id: catStrategy._id,
        description: 'Enjoy the classic Tic Tac Toe game right in your browser. Play against a friend locally or challenge our AI. Perfect for a quick break!',
        image_url: '/assets/img/games/screenshot_tictactoe.png',
        status: 'public'
      });

      await Game.create({
        title: 'Chess',
        category_id: catBoard._id,
        description: 'Play a full game of classic Chess against a smart AI. Put your strategy skills to the test!',
        image_url: '/assets/img/games/OIP.jpg',
        status: 'public'
      });

      console.log('Initial categories and games seeded successfully!');
    }

    // Ensure Admin User always exists
    const adminExists = await User.findOne({ email: 'admin@endgame.com' });
    if (!adminExists) {
      await User.create({
        name: 'Super Admin',
        email: 'admin@endgame.com',
        password: 'password123',
        role: 'admin'
      });
      console.log('Default Admin user created: admin@endgame.com');
    }

    // Ensure Developer User always exists
    const devExists = await User.findOne({ email: 'developer@endgame.com' });
    if (!devExists) {
      await User.create({
        name: 'Pro Developer',
        email: 'developer@endgame.com',
        password: 'password123',
        role: 'developer'
      });
      console.log('Default Developer user created: developer@endgame.com');
    }
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

module.exports = seedDatabase;
