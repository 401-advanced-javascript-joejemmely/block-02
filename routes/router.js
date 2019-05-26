'use strict';

const express = require('express');
const createSearch = require('../middleware/create-search.js');
const newSearch = require('../middleware/new-search.js');
const dbSelector = require('../helper/db-selector.js');

const router = express.Router();

const { getBooks, getBook, createBook, updateBook, deleteBook } = dbSelector(
  'mongo'
);

// API Routes
router.get('/', getBooks);
router.post('/searches', createSearch);
router.get('/searches/new', newSearch);
router.get('/books/:id', getBook);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.get('*', (request, response) =>
  response.status(404).send('This route does not exist')
);

module.exports = router;
