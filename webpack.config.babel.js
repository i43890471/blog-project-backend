const path = require('path');

module.exports = {
  context: path.resolve('./server'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: `/dist/`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};