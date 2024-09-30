// backend/config/database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./socialmedia.db');

// Create Users table
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT,
            userId INTEGER,
            timestamp TEXT,
            FOREIGN KEY(userId) REFERENCES users(id)
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT,
            userId INTEGER,
            timestamp TEXT,
            FOREIGN KEY(userId) REFERENCES users(id)
        )
    `);
});

module.exports = db;