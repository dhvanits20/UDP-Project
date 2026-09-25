const express = require('express');
const router = express.Router();
const { getUsers, getSubmissions, approveSubmission, getAdminDashboard, getAllReviews, deleteReview, updateGame } = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/dashboard').get(protect, admin, getAdminDashboard);
router.route('/users').get(protect, admin, getUsers);
router.route('/submissions').get(protect, admin, getSubmissions);
router.route('/submissions/:id/approve').post(protect, admin, approveSubmission);
router.route('/reviews').get(protect, admin, getAllReviews);
router.route('/reviews/:id').delete(protect, admin, deleteReview);
router.route('/games/:id').put(protect, admin, updateGame);

module.exports = router;
