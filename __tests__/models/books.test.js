'use strict';

const books = require('../../models/books-model');
const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Books Model', () => {
  it('can post() a new book', () => {
    let obj = {
      name: 'John',
      bats: 'R',
      throws: 'R',
      position: 'C',
      team: 'Bunnies'
    };
    return books.post(obj).then(record => {
      Object.keys(obj).forEach(key => {
        expect(record[key]).toEqual(obj[key]);
      });
    });
  });

  it('can get() a book', () => {
    let obj = {
      name: 'John',
      bats: 'R',
      throws: 'R',
      position: 'C',
      team: 'Bunnies'
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
