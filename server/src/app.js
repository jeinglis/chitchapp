const express = require('express');

const app = express();
const server = require('http').Server(app);

const port = process.env.PORT || 3000;

const io = require('socket.io')(server);

server.listen(port, () => {
  console.log(`Listening on *:${port}`);
});

app.get('/', (request, response) => {
  // console.log(io.sockets.adapter.rooms);
  response.send('hello world');
});

app.get('/onlineusers', (request, response) => {
  // console.log(io.sockets.adapter.rooms);
  response.send(io.sockets.adapter.rooms);
});

io.on('connection', (socket) => {
  console.log(`A user connected:${socket.id}`);

  // Tell all clients that someone connected
  io.emit('user joined', socket.id);

  // The client sends 'chat.message' event to server
  socket.on('chat.message', (message) => {
    // Emit this event to all clients connected to it
    io.emit('chat.message', message);
  });

  // client sends "user typing" event to server
  socket.on('user typing', (username) => {
    io.emit('user typing', username);
  });

  // client sends 'stopped typing' event to server
  socket.on('stopped typing', (username) => {
    io.emit('stopped typing', username);
  });


  socket.on('disconnect', () => {
    console.log(`User left: ${socket.id}`);

    // Tell all clients that someone disconnected
    socket.broadcast.emit('user left', socket.id);
  });
});
