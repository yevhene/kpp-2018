const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

const tasks = [{
  name: 'Hello Task'
}];

app.get('/tasks', function(req, res) {
  res.send(tasks);
});

app.post('/tasks', function(req, res) {
  const task = req.body;
  tasks.push(task);
  res.sendStatus(201);
});

app.listen(3000, function() {
  console.log('Started http://localhost:3000');
});
