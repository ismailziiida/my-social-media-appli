// backend/controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

exports.register = (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (row) return res.status(400).json({ msg: 'User already exists' });

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) throw err;

            db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], (err) => {
                if (err) return res.status(500).json({ msg: 'Server error' });
                res.status(201).json({ msg: 'User registered successfully' });
            });
        });
    });
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (!row) return res.status(400).json({ msg: 'User not found' });

        bcrypt.compare(password, row.password, (err, isMatch) => {
            if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

            const token = jwt.sign({ id: row.id }, 'secretkey', { expiresIn: '1h' });
            res.json({ token });
        });
    });
};