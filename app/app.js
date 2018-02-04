const path = require('path');
const express = require('express');

const markdown = require('./lib/markdown');

const app = express();
app.use('/slides', require('../slides/app'));

markdown.routes(app, '/', path.join(__dirname, '../'));
markdown.routes(app, '/labs', path.join(__dirname, '../labs'));
markdown.routes(app, '/lectures', path.join(__dirname, '../lectures'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening http://localhost:${port} port`)
});