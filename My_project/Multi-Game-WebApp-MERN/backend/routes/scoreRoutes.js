const express = require('express');
const router = express.Router();
const { submitScore, getMyScores } = require('../controllers/scoreController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, submitScore);
router.get('/my-scores', protect, getMyScores);

module.exports = router;
