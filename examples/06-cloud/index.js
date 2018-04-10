const express = require('express');
const app = express();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/kpp-deploy-2';
let mongo;
MongoClient
  .connect(mongoUrl)
  .then(function(client) {
    mongo = client.db();
    console.log('Mongo started');
  })
  .catch(function(error) {
    console.log(error.toString());
  })

app.get('*', function(req, res) {
  mongo
    .collection('messages').insert({ text: new Date().toString() })
    .then(function() {
      mongo
        .collection('messages').find().toArray()
        .then(function(messages) {
          res.send(JSON.stringify(messages));
        });
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`App started on http://localhost:${PORT}`);
});
