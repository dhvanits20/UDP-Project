const express = require('express');
const router = express.Router();
const { submitContact, getContactMessages } = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(submitContact);
router.route('/all').get(protect, admin, getContactMessages);

module.exports = router;
