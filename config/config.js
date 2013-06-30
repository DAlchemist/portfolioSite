config = {};

config.cookieSecret = 'random string';

config.port         = process.env.PORT || 3000;

config.indexFile    = 'index.ejs';


config.maxWorkers = 100;


module.exports = config;
