'use strict';

module.exports = function(info) {
  var model = {
    page: 'index',
    title: info.title,
    message: info.message
  };

  return model;
};
