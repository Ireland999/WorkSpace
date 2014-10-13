var httpProxy = require('http-proxy');
var url = require('url');
var config = require('./config');

var apiServerUrl = url.parse(config.apiServer);
var uploadServerUrl = url.parse(config.uploadServer);

var proxy = httpProxy.createProxyServer();

module.exports = {
  options: {
    port: 9000
  },
  dist: {
    options: {
      hostname: '*',
      base: '<%= config.dist %>',
      keepalive: true
    }
  },
  dev: {
    options: {
      livereload: true,
      middleware: function (connect) {
        return [
          connect().use('/bower_components', connect.static('bower_components')),
          connect.static(config.app),
          connect.static(config.framework),
          connect().use(apiServerUrl.pathname, function (req, res) {
            console.log('api proxy');
            proxy.web(req, res, {
              target: config.apiServer
            }, function (e) {
              console.error(e);
              res.statusCode = 500;
              res.end();
            });
          }),
          connect().use(uploadServerUrl.pathname, function (req, res) {
            console.log('upload proxy');
            proxy.web(req, res, {
              target: config.uploadServer
            }, function (e) {
              console.error(e);
              res.statusCode = 500;
              res.end();
            });
          })
        ];
      }
    }
  }
};
