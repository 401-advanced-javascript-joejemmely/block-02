'use strict';

const supergoose = require('./supergoose.js');
const { app } = require('../server.js');
const mockRequest = supergoose.server(app);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('api server', () => {
  it('should respond with a 404 on an invalid route', () => {
    return mockRequest.get('/foo').then(results => {
      expect(results.status).toBe(404);
    });
  });

  it('should respond with a 404 on an invalid method', () => {
    return mockRequest.post('/books/12').then(results => {
      expect(results.status).toBe(404);
    });
  });

  it('should be able to post to a valid model', () => {
    let obj = { author: 'test' };

    return mockRequest
      .post('/books')
      .send(obj)
      .then(results => {
        expect(results.status).toBe(302);
      });
  });
});
