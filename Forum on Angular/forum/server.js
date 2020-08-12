const express = require('express');
const jsonServer = require('json-server');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

/* 
Kai bus subuildintas angular, galima bus paleisti
tik šį serverį su 3000 portu. 
In develop mode - express ir Angular skirtinguose port

app.use(express.static(__dirname + '/dist/forum'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname));
});
*/
const server = http.createServer(app);

app.use('/api', jsonServer.router('database/db.json'));
app.use(jsonServer.bodyParser)
app.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});