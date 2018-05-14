const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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

app.delete('/tasks/:index', function(req, res) {
  tasks.splice(req.params.index, 1);
  res.sendStatus(200);
});

app.listen(3000, function() {
  console.log('Started on http://localhost:3000');
});
