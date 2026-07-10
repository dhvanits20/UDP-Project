const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const User = require('./models/User');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/multi_game_db_mern';

const reset = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);
    
    await User.findOneAndUpdate(
      { email: 'admin@gmail.com' }, 
      { password: hashedPassword }
    );
    
    console.log('Password reset to: admin123');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

reset();
