const app     = require('express')();
const http    = require('http').Server(app);
const io      = require('socket.io')(http);
const port    = process.env.PORT || 2001;
const express = require('express');
const router  = express.Router();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  // 유저 접속 확인
  socket.broadcast.emit('chat message', 'user connection');
  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    socket.broadcast.emit('chat messgae', 'user disconnection');
  })
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

module.exports = router;