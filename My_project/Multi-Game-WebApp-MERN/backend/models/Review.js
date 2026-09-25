const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  game_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);
