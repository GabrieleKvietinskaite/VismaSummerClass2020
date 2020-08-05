const express = require('express');
const jsonServer = require('json-server');
const server = express();
const path = require('path');

server.use(express.static(path.join(__dirname, '../')));

server.use('/api', jsonServer.router('../database/db.json'));
server.listen(3000, () => {
  console.log('Server is running')
});