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

// HELPER FUNCTIONS
function Book(info) {
  const placeholderImage = 'https://i.imgur.com/J5LVHEL.jpg';

  this.title = info.title ? info.title : 'No title available';
  this.author = info.authors ? info.authors[0] : 'No author available';
  this.isbn = info.industryIdentifiers
    ? `ISBN_13 ${info.industryIdentifiers[0].identifier}`
    : 'No ISBN available';
  this.image_url = info.imageLinks
    ? info.imageLinks.smallThumbnail
    : placeholderImage;
  this.description = info.description
    ? info.description
    : 'No description available';
  this.id = info.industryIdentifiers
    ? `${info.industryIdentifiers[0].identifier}`
    : '';
}

let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = { app, start };
