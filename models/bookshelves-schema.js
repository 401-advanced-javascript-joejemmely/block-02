'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const bookshelves = mongoose.Schema({
  name: { type: String },
});

module.exports = mongoose.model('bookshelves', bookshelves);
