const mongoose = require('mongoose');

const GameSubmissionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  game_file: { type: String },
  developer_name: { type: String, required: true },
  developer_email: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  admin_feedback: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('GameSubmission', GameSubmissionSchema);
