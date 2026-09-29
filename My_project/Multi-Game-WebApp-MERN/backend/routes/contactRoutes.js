const express = require('express');
const router = express.Router();
const { submitContact, getContactMessages, replyContact } = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(submitContact);
router.route('/all').get(protect, admin, getContactMessages);
router.route('/reply').post(protect, admin, replyContact);

module.exports = router;
