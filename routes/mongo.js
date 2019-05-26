'use strict';

const mongoose = require('mongoose');
const books = require('../models/books-model.js');
const handleError = require('../middleware/handle-error.js');

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);

function getBooks(request, response, next) {
  books
    .getAll()
    .then(data => {
      const books = data.map(book => {
        return {
          id: book._id,
          ...book._doc
        };
      });
      response.render('pages/index', { books: data });
    })
    .catch(err => handleError(err, response));
}

function getBook(request, response, next) {
  books
    .get(request.params.id)
    .then(data => {
      console.log(data);
      response.render('pages/books/show', {
        book: data[0],
        bookshelves: data
      });
    })
    .catch(err => handleError(err, response));
}

function createBook(request, response, next) {
  books
    .post(request.body)
    .then(result => {
      response.redirect(`/books/${result._id}`);
    })
    .catch(err => handleError(err, response));
}

function updateBook(request, response, next) {
  books
    .put(request.params.id, request.body)
    .then(response.redirect(`/books/${request.params.id}`))
    .catch(err => handleError(err, response));
}

function deleteBook(request, response, next) {
  books
    .delete(request.params.id)
    .then(response.redirect('/'))
    .catch(err => handleError(err, response));
}

module.exports = { createBook, getBooks, getBook, updateBook, deleteBook };
