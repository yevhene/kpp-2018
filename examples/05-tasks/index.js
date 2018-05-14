const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const tasks = [{
  name: 'Hello Task'
}];

app.get('/', function(req, res) {
  res.render('index', { tasks });
});

app.post('/tasks', function(req, res) {
  const task = req.body;
  tasks.push(task);

  res.redirect('/');
});

app.get('/tasks/:index/delete', function(req, res) {
  tasks.splice(req.params.index, 1);

  res.redirect('/');
});

app.listen(3000, function() {
  console.log('Started on http://localhost:3000');
});
