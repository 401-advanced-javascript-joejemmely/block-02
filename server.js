'use strict';

require('dotenv').config();

// Application Dependencies
const express = require('express');
const methodOverride = require('method-override');
const routes = require('./routes/router.js');

// Application Setup
const app = express();

// Application Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
app.use(
  methodOverride((request, response) => {
    if (
      request.body &&
      typeof request.body === 'object' &&
      '_method' in request.body
    ) {
      // look in urlencoded POST bodies and delete it
      let method = request.body._method;
      delete request.body._method;
      return method;
    }
  })
);

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// Routes
app.use('/', routes);

let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = { app, start };
