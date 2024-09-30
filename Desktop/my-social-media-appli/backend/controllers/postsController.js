// backend/controllers/postsController.js
const db = require('../config/database');

exports.createPost = (req, res) => {
    const { content, userId } = req.body;
    const timestamp = new Date().toISOString();

    db.run('INSERT INTO posts (content, userId, timestamp) VALUES (?, ?, ?)', [content, userId, timestamp], (err) => {
        if (err) return res.status(500).json({ msg: 'Error creating post' });
        res.status(201).json({ msg: 'Post created successfully' });
    });
};

exports.getPosts = (req, res) => {
    db.all('SELECT * FROM posts', [], (err, rows) => {
        if (err) return res.status(500).json({ msg: 'Error fetching posts' });
        res.json(rows);
    });
};