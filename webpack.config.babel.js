import path from 'path'

export default {
  devtool: 'eval', // cheap-module-eval-source-map (least taxing map to original code)
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      }
    ],
  },
}
