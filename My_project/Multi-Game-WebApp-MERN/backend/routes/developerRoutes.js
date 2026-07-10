const express = require('express');
const router = express.Router();
const { submitGame, getMyGames, applyDeveloper } = require('../controllers/developerController');
const { protect, developer } = require('../middlewares/authMiddleware');

router.post('/apply', protect, applyDeveloper);
router.post('/games', protect, developer, submitGame);
router.get('/games', protect, developer, getMyGames);

module.exports = router;
