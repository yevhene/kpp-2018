const path = require('path');
const express = require('express');
const webpack = require('webpack');

const APP = process.argv[2];

const config = require('./webpack.config')(APP);

const app = express();
const compiler = webpack(config);

app.set('view engine', 'ejs');

app.use('/images', express.static('images'));
app.use('/vendor', express.static('vendor'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.render('index', { APP });
});

app.listen(4000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:4000');
});
