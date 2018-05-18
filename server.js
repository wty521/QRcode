
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.js');
// var _host = process.argv[4] || 'localhost'

const compiler = webpack(config);


function bindWebpack() {
  compiler.apply(new webpack.ProgressPlugin);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler, {
    path: './__webpack_hmr',
  }));
}
function startServer() {
  const port = 8112;
  app.listen(port, () => {
    console.log('\napp listening on port %s ！open http://localhost: %s \n', port, port);
  });
}


function onError(e) {
  console.error(e.stack ? e.stack : e);
  process.exit();
}

function start() {
  new Promise(((resolve) => {
    resolve();
  }))
    .then(bindWebpack)
    // .then(bindProxy)
    .then(startServer)
    .catch(onError);
}

start();
