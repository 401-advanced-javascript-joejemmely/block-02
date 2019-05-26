'use strict';

module.exports = function handleError(error, response) {
  response.render('pages/error', { error: error });
};
