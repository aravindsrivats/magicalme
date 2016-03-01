'use strict';

var IndexModel = require('../models/index');

module.exports = function(router) {
  router.get('/', function(req, res) {
    var info = {
      title: 'magical.me',
      message: 'Well this could be an autobiography, but for now its just a portfolio'
    };
    res.render('index', new IndexModel(info));
  });
};
