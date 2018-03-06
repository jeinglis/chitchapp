const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const uuid = require('uuid4');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 3000);

const messages = [];
// randomly generate a magical nickname for new users
function generateNick() {
  const prefix = ['Sparkle', 'Pretty', 'Glitter', 'Beautiful', 'Delicate', 'Petite', 'Perfect', 'Special', 'Magical', 'Mystical', 'Flatulent'];
  const suffix = ['Princess', 'Feiry', 'Unicorn', 'Pony', 'Bolognese', 'Shawarma'];
  const nickName = `${prefix[Math.floor(Math.random() * (prefix.length - 1))]} ${suffix[Math.floor(Math.random() * (suffix.length - 1))]}`;
  return nickName;
}
app.get('/getMessages', (req, res) => {
  res.send({
    message: messages,
  });
});

app.get('/login', (req, res) => {
  res.send({
    uuid: uuid(),
    nickname: generateNick(),
    textColor: 'white',
  });
});

app.post('/newMessage', (req, res) => {
  messages.push(req.body.message);
  console.log(messages);
  res.send({
    message: `I received your message ${messages[messages.length - 1].message}`,
  });
});

// app.get('/', (req, res) => {
//   res.send({
//     message: 'hello world',
//   });
// });

// const server = require('http').Server(app);

// const port = process.env.PORT || 3000;

// const io = require('socket.io')(server);

// const messages = [];

// server.listen(port, () => {
//   console.log(`Listening on *: ${port}`);
// });

// app.get('/onlineusers', (request, response) => {
//   console.log(io.sockets.adapter.rooms);
//   response.send(io.sockets.adapter.rooms);
// });

// app.get('/', (request, response) => {
//   console.log('user just connected');
//   response.send('hello');
// });

// io.on('connection', (socket) => {
//   console.log(`A user connected:${socket.id}`);

//   messages.push({
//     type: 'system',
//     nick: 'Notification',
//     nickColor: '#BDBDBD',
//     dateTime: 'March 1st 3:25pm',
//     message: 'New User Joined',
//     userId: 'system',
//   });
//   // Tell all clients that someone connected
//   io.emit(messages);

//   // The client sends 'chat.message' event to server
//   socket.on('chat.message', (message) => {
//     // Emit this event to all clients connected to it
//     messages.push(message);
//     io.emit(messages);
//   });

//   // client sends "user typing" event to server
//   socket.on('user typing', (username) => {
//     io.emit('user typing', username);
//   });

//   // client sends 'stopped typing' event to server
//   socket.on('stopped typing', (username) => {
//     io.emit('stopped typing', username);
//   });


//   socket.on('disconnect', () => {
//     console.log(`User left: ${socket.id}`);
//     messages.push({
//       type: 'system',
//       nick: 'Notification',
//       nickColor: '#BDBDBD',
//       dateTime: 'March 1st 3:25pm',
//       message: 'User disconnected',
//       userId: 'system',
//     });
//     socket.broadcast.emit(messages);

//     // Tell all clients that someone disconnected
//     // socket.broadcast.emit('user left', socket.id);
//   });
// });
