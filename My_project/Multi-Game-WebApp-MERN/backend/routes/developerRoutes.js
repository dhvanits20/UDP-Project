const express = require('express');
const router = express.Router();
const { submitGame, getDeveloperDashboard } = require('../controllers/developerController');
const { protect, developer } = require('../middleware/authMiddleware');

router.route('/dashboard').get(protect, developer, getDeveloperDashboard);
router.route('/submit-game').post(protect, developer, submitGame);

module.exports = router;
