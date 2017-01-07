var path = require('path');
var webpack = require('webpack');
var opn = require('opn');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.dev.conf.js');

var port = 3000;
process.env.NODE_ENV = 'development';

// 监控资源变动，重编译，热更新
new WebpackDevServer(webpack(webpackConfig), {
  publicPath: '/',
  hot: true,
  historyApiFallback: true,
  inline: true,
  stats: {
    colors: true
  }
}).listen(port, function (err){
  if (err) {
    console.log(err);
    return;
  }
  var uri = 'http://localhost:' + port;
  console.log('Listening at ' + uri + '\n')
  opn(uri);
});

