# BLOCK - 02

## Book App v2

### Author: Joé Jemmely

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-joejemmely/block-02/pull/1)
- [travis](https://travis-ci.com/401-advanced-javascript-joejemmely/block-02)
- [front-end with mongoDB](https://block-02.herokuapp.com/)
  - Check the book ids (/books/:id) to see that it's working with mongo instead of pg

### Setup

#### `.env` requirements

- `PORT` - Port Number
- `MONGODB_URI` - URL to the running mongo instance/db
- `DATABASE_URL` - URL to the running postgre db

#### Running the app

- `npm start`
- To switch between mongo and postgre, update line 10 in router.js

```
const { getBooks, getBook, createBook, updateBook, deleteBook } = dbSelector(
  'mongo'
); // for mongoDB

const { getBooks, getBook, createBook, updateBook, deleteBook } = dbSelector(
  'pg'
); // for postgre
```

#### Tests

- How do you run tests?
- What assertions were made?
- What assertions need to be / should be made?

#### UML

Link to an image of the UML for your application and response to events
