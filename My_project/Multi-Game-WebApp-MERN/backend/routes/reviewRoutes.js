const express = require('express');
const router = express.Router();
const { getReviewsByGame } = require('../controllers/reviewController');

router.get('/:gameId', getReviewsByGame);

module.exports = router;
