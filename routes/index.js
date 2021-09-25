const express = require('express');
const router = express.Router();
const app = express();
const http = require('http');
const server = http.createServer(app);

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

app.get('/', (req, res) => {
  res.send('<h3>Hello socketio</h3>');
});

server.listen(2001, () => {
  console.log('listening on *:2001');
});

module.exports = router;
