const express = require('express');
const router = express.Router();
const { getGames, getGameById, getCategories, getGameReviews, createReview } = require('../controllers/gameController');
const { getAllReviews } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

router.get('/categories', getCategories);
router.get('/reviews/all', getAllReviews);
router.get('/', getGames);
router.get('/:id', getGameById);

// Reviews for a specific game
router.route('/:id/reviews')
  .get(getGameReviews)
  .post(protect, createReview);

module.exports = router;

