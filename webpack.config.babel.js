import path from 'path'
import webpack from 'webpack'

export default {
  devtool: 'eval', // cheap-module-eval-source-map (least taxing map to original code)
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'], // equivalent to loader: 'react-hot!babel'
        exclude: /node_modules/,
        include: __dirname,
      }
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
