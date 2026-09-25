const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  game_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  score: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Score', ScoreSchema);
