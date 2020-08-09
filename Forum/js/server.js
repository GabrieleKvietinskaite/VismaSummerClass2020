const express = require('express');
const jsonServer = require('json-server');
const server = express();
const path = require('path');

server.use(express.static(path.join(__dirname, '../')));
server.use('/api', jsonServer.router('../database/db.json'));
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

server.listen(3000, () => {
  console.log('Server is running')
});