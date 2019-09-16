const express = require('express');

const db = require('./data/db.js');

const server = express();

// MIDDLEWARE
server.use(express.json());

// ENDPOINTS
server.get('/api/users', (req, res) => {
  db.find()
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      res.status(500).json({
        message: 'could not find users',
        err,
      });
    });
});

server.post('/api/users', (req, res) => {
  const newUser = req.body;
  db.instert(newUser)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'please provide all necessary info',
        err,
      });
    });
});

// EXPORT
module.exports = server;
