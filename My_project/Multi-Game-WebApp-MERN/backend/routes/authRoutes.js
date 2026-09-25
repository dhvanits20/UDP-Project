const express = require('express');
const router = express.Router();
const { registerUser, authUser, verifyOtp } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/verify-otp', verifyOtp);

module.exports = router;
