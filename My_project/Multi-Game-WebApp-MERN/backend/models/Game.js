const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  description: { type: String },
  image_url: { type: String },
  game_file: { type: String },
  developer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  developer_email: { type: String },
  status: { type: String, enum: ['public', 'private', 'pending', 'rejected'], default: 'public' }
}, { timestamps: true });

module.exports = mongoose.model('Game', GameSchema);
