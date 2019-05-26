'use strict';

module.exports = function dbSelector(db) {
  switch (db) {
  case 'pg': {
    return require('../routes/pg');
  }
  case 'mongo': {
    return require('../routes/mongo.js');
  }
  }
};
