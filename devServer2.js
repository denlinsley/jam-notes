var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config2.babel.js');

// you can still call this with `node devServer2.js` in a script 
// you don't have to reference the node_module directly to use WDS
new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  hot: true,
  noInfo: true,
  publicPath: config.output.publicPath,
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
