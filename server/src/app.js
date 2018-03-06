const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const morgan = require('morgan');
const uuid = require('uuid4');
const moment = require('moment');

const app = express();
// app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 3000);

const messages = [];

let activeUsers = [];
let tempUsers = [];
// randomly generate a magical nickname for new users
function generateNick() {
  const prefix = ['Sparkle', 'Pretty', 'Glitter', 'Beautiful', 'Delicate', 'Petite', 'Perfect', 'Special', 'Magical', 'Mystical', 'Flatulent'];
  const suffix = ['Princess', 'Fairy', 'Unicorn', 'Pony', 'Bolognese', 'Shawarma'];
  const nickName = `${prefix[Math.floor(Math.random() * (prefix.length - 1))]} ${suffix[Math.floor(Math.random() * (suffix.length - 1))]}`;
  return nickName;
}

// swap users lists
function userListManager() {
  activeUsers.forEach((activeItem) => {
    let index = tempUsers.findIndex(tempItem => tempItem.uuid === activeItem.uuid);
    if (index === -1 && activeItem.uuid !== 'initial') {
      console.log(activeItem);
      messages.push({
        type: 'system',
        nickname: 'Notification',
        nicknameColor: '#BDBDBD',
        dateTime: moment().local().format(' h:mm:ss a - MMMM Do YYYY'),
        message: `${activeItem.nickname} has left the chat`,
        userId: '',
      });
    }
    index = 0;
  });
  activeUsers = tempUsers;
  tempUsers = [];
}

setInterval(userListManager, 2000);

app.get('/getMessages', (req, res) => {
  res.send({
    message: messages,
  });
});

app.post('/getUserList', (req, res) => {
  const index = tempUsers.findIndex(item => item.uuid === req.body.uuid);
  if (index === -1 && req.body.uuid.uuid !== 'initial') {
    tempUsers.push(req.body);
  }
  const emptyIndex = activeUsers.findIndex(item => item.uuid === 'initial');
  if (emptyIndex >= 0) {
    activeUsers.splice(emptyIndex, 1);
  }
  function compare(a, b) {
    if (a.nickname < b.nickname) return -1;
    if (a.nickname > b.nickname) return 1;
    return 0;
  }
  res.send(activeUsers.sort(compare));
});

// app.post('/logout', (req, res) => {
//   console.log(req.body);
//   const index = activeUsers.findIndex(item => item.uuid === req.body.uuid);
//   activeUsers.splice(index, 1);
//   res.send(activeUsers);
// });

app.get('/login', (req, res) => {
  const user = {
    uuid: uuid(),
    nickname: generateNick(),
    nickColor: 'white',
  };

  // activeUsers.push(user);
  tempUsers.push(user);
  messages.push({
    type: 'system',
    nickname: 'Notification',
    nicknameColor: '#BDBDBD',
    dateTime: moment().local().format(' h:mm:ss a - MMMM Do YYYY'),
    message: `${user.nickname} has joined the chat`,
    userId: '',
  });
  res.send(user);
});

app.post('/newMessage', (req, res) => {
  messages.push(req.body.message);
  res.send({
    message: `I received your message ${messages[messages.length - 1].message}`,
  });
});
