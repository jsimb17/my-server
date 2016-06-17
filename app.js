require('dotenv').load();
var express = require('express');
var Test = require('./models/tests');

var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', function(req, res) {
  Test
    .find()
    .then(function(tests) {
      res.json(tests);
    });
});

app.listen(3030, function() {
  console.log('Listening on http://localhost:3030...');
});
