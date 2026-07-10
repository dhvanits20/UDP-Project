const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Score', scoreSchema);
