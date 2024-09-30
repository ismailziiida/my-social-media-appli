const express = require('express');
const { sendMessage, getMessages } = require('../controllers/messagesController');
const router = express.Router();

router.post('/send', sendMessage);
router.get('/all', getMessages);

module.exports = router;