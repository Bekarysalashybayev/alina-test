require('dotenv').config();
import express from 'express';
import http from 'http';
import router from './router/router';
import corsOptions from './middleware/cors'
import sqlite3 from 'sqlite3';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(corsOptions);

app.get("/", (req, res) => {
    res.json({message: "Success"});
});

app.use('/api/v1', router);

export const db = new sqlite3.Database('./mydb.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

db.run('CREATE TABLE IF NOT EXISTS applications (id INTEGER PRIMARY KEY, fio TEXT, phoneNumber TEXT, requestType TEXT, date TEXT, quantity INTEGER, city TEXT, call TEXT)');

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

