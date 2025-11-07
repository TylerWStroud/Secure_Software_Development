import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
app.use(cors());
app.use(express.json());

async function getDb() {
    return open({
        filename: './data/users.db',
        driver: sqlite3.Database
    });
}

app.post("/api/login", async(req,res) =>{
    const { username, password } = req.body;
    const db = await getDb();
    const query = `SELECT id, username, role FROM users WHERE username = '${username}' AND password = '${password}'`;
    try {
        const row = await db.get(query);
        res.json({
        query,
        result: row ? { success: true, user: row } : { success: false, message: 'Invalid credentials' }
        });
    } catch (err) {
        res.status(500).json({ query, error: String(err) });
    }
});

app.get('/api/profile', async (req, res) => {
    const username = req.query.username as string;
    const db = await getDb();
    const query = `SELECT id, username, role FROM users WHERE username = '${username}'`;
    try {
        const rows = await db.all(query);
        res.json({ query, rows });
    } catch (err) {
        res.status(500).json({ query, error: String(err) });
    }
});

const port = 4000;
app.listen(port, () => {
    console.log(`Vulnerable app listening on http://localhost:${port}`);
});