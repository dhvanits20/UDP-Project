const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { submitGame, getDeveloperDashboard } = require('../controllers/developerController');
const { protect, developer } = require('../middleware/authMiddleware');

const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const cleanName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    cb(null, `${Date.now()}-${cleanName}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 150 * 1024 * 1024 } // 150MB max
});

router.route('/dashboard').get(protect, developer, getDeveloperDashboard);
router.route('/submit-game').post(
  protect, 
  developer, 
  upload.fields([
    { name: 'game_file', maxCount: 1 },
    { name: 'image_file', maxCount: 1 }
  ]), 
  submitGame
);

module.exports = router;
