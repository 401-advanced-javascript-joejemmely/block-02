'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const books = mongoose.Schema({
  title: { type: String },
  author: { type: String },
  isbn: { type: String },
  image_url: { type: String },
  description: { type: String },
  bookshelf: { type: String }
});

module.exports = mongoose.model('books', books);
