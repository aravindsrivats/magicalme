'use strict';

var express = require('express'),
    kraken = require('kraken-js'),
    debug = require('debug')('magicalme'),
    environments = {
        'development': 'Room of Requirement',
        'production': 'Ministry of Magic'
    },
    options, app, port;

options = {
    onconfig: function(config, next) {
        next(null, config);
    }
};

app = module.exports = express();
app.use(kraken(options));
app.on('start', function() {
    port = app.kraken.get('port');
    app.listen(port, function() {
        debug('Environment: %s', environments[app.kraken.get('env:env')]);
        debug('Available to sign copies!');
    });
});
