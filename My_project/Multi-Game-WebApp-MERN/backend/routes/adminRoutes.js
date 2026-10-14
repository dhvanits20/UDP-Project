const express = require('express');
const router = express.Router();
const {
  getUsers,
  getSubmissions,
  approveSubmission,
  rejectSubmission,
  getAdminDashboard,
  getAllReviews,
  deleteReview,
  getAllGamesAdmin,
  deleteGame,
  deleteUser,
  updateGame
} = require('../controllers/adminController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/dashboard').get(protect, admin, getAdminDashboard);
router.route('/users').get(protect, admin, getUsers);
router.route('/users/:id').delete(protect, admin, deleteUser);
router.route('/submissions').get(protect, admin, getSubmissions);
router.route('/submissions/:id/approve').post(protect, admin, approveSubmission);
router.route('/submissions/:id/reject').post(protect, admin, rejectSubmission);
router.route('/reviews').get(protect, admin, getAllReviews);
router.route('/reviews/:id').delete(protect, admin, deleteReview);
router.route('/games/all').get(protect, admin, getAllGamesAdmin);
router.route('/games/:id').put(protect, admin, updateGame).delete(protect, admin, deleteGame);

module.exports = router;

