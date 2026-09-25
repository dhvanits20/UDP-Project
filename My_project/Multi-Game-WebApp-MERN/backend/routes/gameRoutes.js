const express = require('express');
const router = express.Router();
const { getGames, getGameById, getCategories } = require('../controllers/gameController');
const { getAllReviews } = require('../controllers/adminController');

router.get('/categories', getCategories);
router.get('/reviews/all', getAllReviews);
router.get('/', getGames);
router.get('/:id', getGameById);

module.exports = router;
