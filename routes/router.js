'use strict';

const express = require('express');
const router = express.Router();

// TODO: require pg || mongo
const {
  getBooks,
  createSearch,
  newSearch,
  getBook,
  createBook,
  updateBook,
  deleteBook
} = require('./pg.js');

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
