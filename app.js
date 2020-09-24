const express = require('express');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test')
  mongoose.connect(`mongodb://localhost/muber`);

//! always BEFORE app
app.use(bodyParser.json());
routes(app);

//! we put it after tp catch errors coming from the route handlers
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});
module.exports = app;
