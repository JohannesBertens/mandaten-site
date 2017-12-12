var port = process.env.PORT || 8080;
var connect = require('connect');
var serveStatic = require('serve-static');
var path = require('path');
connect().use(serveStatic(path.join(__dirname, "/static"))).listen(port);