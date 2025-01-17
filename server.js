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
  db.insert(newUser)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'please include name and bio',
        err,
      });
    });
});

server.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then((deletedUser) => {
      if (deletedUser) {
        res.status(200).json(deletedUser);
      } else {
        res.status(404).json({
          message: 'invalid user id',
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: 'cannot delete user',
        err,
      });
    });
});

// EXPORT
module.exports = server;
