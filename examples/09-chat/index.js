const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const uuidv1 = require('uuid/v1');
const url = require('url');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

const users = [];
const messages = [];

app.post('/session', function(req, res) {
  const { username, password } = req.body;
  let user = findUserByUsername(username);

  if (!user) {
    user = createUser(username, password);
  }

  if (checkPassword(user.passwordHash, password)) {
    const token = generateToken();
    user.token = token;
    res.send({ token });
  } else {
    res.sendStatus(401);
  }
});

function auth(req, res, next) {
  const token = req.get('Authorization');
  const user = findUserByToken(token);

  if (user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

app.get('/messages', auth, function(req, res) {
  res.send(messages);
});

app.listen(3000, function() {
  console.log('Started at http://localhost:3000');
});

function createUser(username, password) {
  const user = {
    username, passwordHash: hashPassword(password)
  };
  users.push(user);
  return user;
}

function generateToken() {
  return uuidv1();
}

function checkPassword(hash, password) {
  return hashPassword(password) === hash;
}

function findUserByUsername(username) {
  return users.find((user) => user.username === username);
}

function findUserByToken(token) {
  return users.find((user) => user.token === token);
}

function hashPassword(password) {
  return crypto.createHash('md5').update(password).digest('hex');
}

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', function connection(ws, req) {
  const token = url.parse(req.url, true).query.token;
  const user = findUserByToken(token);

  if (!user) {
    ws.terminate();
    return;
  }

  ws.on('message', function incoming(data) {
    const message = JSON.parse(data);
    message.username = user.username;
    messages.push(message);

    for (let client of wss.clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    }
  });
});
