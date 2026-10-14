const express = require('express');
const router = express.Router();
const { submitScore, getTopScores, getMyScores } = require('../controllers/scoreController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, submitScore);
router.get('/top', getTopScores);
router.get('/my', protect, getMyScores);

module.exports = router;
