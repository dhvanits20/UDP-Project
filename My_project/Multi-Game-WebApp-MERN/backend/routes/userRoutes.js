const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, getUserReviews, getUserDashboard } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.route('/dashboard').get(protect, getUserDashboard);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/reviews').get(protect, getUserReviews);

module.exports = router;
