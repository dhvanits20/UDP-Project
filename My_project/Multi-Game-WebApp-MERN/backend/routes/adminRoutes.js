const express = require('express');
const router = express.Router();
const { getUsers, approveDeveloper, approveGame } = require('../controllers/adminController');
const { protect, admin } = require('../middlewares/authMiddleware');

router.get('/users', protect, admin, getUsers);
router.put('/developers/:id/approve', protect, admin, approveDeveloper);
router.put('/games/:id/approve', protect, admin, approveGame);

module.exports = router;
