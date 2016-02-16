'use strict';

var PROJECTS = require('./projects');

module.exports = function(info) {
  return {
    page: 'index',
    title: info.title,
    message: info.message,
    projects: PROJECTS
  };
};
