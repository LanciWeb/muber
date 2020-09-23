const express = require('express');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');

//! always BEFORE app
app.use(bodyParser.json());
routes(app);

module.exports = app;
