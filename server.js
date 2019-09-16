const express = require('express');

const server = express();

// MIDDLEWARE
server.use(express.json());

// ENDPOINTS


// EXPORT
module.exports = server;