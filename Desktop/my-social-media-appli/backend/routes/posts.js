const express = require('express');
const { createPost, getPosts } = require('../controllers/postsController');
const router = express.Router();

router.post('/create', createPost);
router.get('/all', getPosts);

module.exports = router;