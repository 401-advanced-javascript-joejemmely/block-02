'use strict';

const books = require('../../models/books-model');
const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Books Model', () => {
  it('can post() a new book', () => {
    let obj = {
      title: 'A Sound Engineers Guide to Audio Test and Measurement',
      author: 'Glen Ballou',
      isbn: 'ISBN_13 9781136121098',
      image_url:
        'http://books.google.com/books/content?id=B8Mida-BPPQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      description:
        'This book offers a quick guide and complete reference to the ' +
        'fundamentals of test and measurement for all aspects of sound ' +
        'engineering. Including electrical and acoustic testing, ' +
        'measurement systems, levels, methods, protecting the ear, ' +
        'units of measurement and standards, this guide comes with and ' +
        'multiple tables to ensure quick easy access to information and ' +
        'illustrate points this is a must have reference for all audio ' +
        'engineers.',
      bookshelf: 'test',
      __v: 0,
    };
    return books.post(obj).then(record => {
      Object.keys(obj).forEach(key => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });

  it('can get() a book', () => {
    let obj = {
      title: 'A Sound Engineers Guide to Audio Test and Measurement',
      author: 'Glen Ballou',
      isbn: 'ISBN_13 9781136121098',
      image_url:
        'http://books.google.com/books/content?id=B8Mida-BPPQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
      description:
        'This book offers a quick guide and complete reference to the ' +
        'fundamentals of test and measurement for all aspects of sound ' +
        'engineering. Including electrical and acoustic testing, ' +
        'measurement systems, levels, methods, protecting the ear, ' +
        'units of measurement and standards, this guide comes with and ' +
        'multiple tables to ensure quick easy access to information and ' +
        'illustrate points this is a must have reference for all audio ' +
        'engineers.',
      bookshelf: 'test',
      __v: 0,
    };
    return books.post(obj).then(record => {
      return books.get(record._id).then(player => {
        Object.keys(obj).forEach(key => {
          expect(player[0][key]).toEqual(obj[key]);
        });
      });
    });
  });
});
