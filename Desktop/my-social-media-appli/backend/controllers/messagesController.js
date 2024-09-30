// backend/controllers/messagesController.js
const db = require('../config/database');

exports.sendMessage = (req, res) => {
    const { content, userId } = req.body;
    const timestamp = new Date().toISOString();

    db.run('INSERT INTO messages (content, userId, timestamp) VALUES (?, ?, ?)', [content, userId, timestamp], (err) => {
        if (err) return res.status(500).json({ msg: 'Error sending message' });
        res.status(201).json({ msg: 'Message sent successfully' });
    });
};

exports.getMessages = (req, res) => {
    db.all('SELECT * FROM messages', [], (err, rows) => {
        if (err) return res.status(500).json({ msg: 'Error fetching messages' });
        res.json(rows);
    });
};