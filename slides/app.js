const glob = require('glob');
const path = require('path');

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use(expressLayouts);
app.set('layout', path.join(__dirname, 'layouts/layout'));

app.use(express.static(path.join(__dirname, 'static')));

glob.sync(path.join(__dirname, 'content/*/')).forEach(dir => {
  const unit = path.basename(dir);
  app.get(`/${unit}`, (req, res) =>
    res.render(path.join('content', unit))
  );
  app.use(express.static(path.join(__dirname, 'content', unit, 'assets')));
});

module.exports = app;
