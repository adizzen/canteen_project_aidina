import http from 'http';
import pool from './db.js'
import CoBody from 'co-body';
import pg from 'pg';

const server = http.createServer((req, res) => {
    res.end("Hello")
});

server.listen(3000, () => {
    console.log('Server started on port 3000');
});