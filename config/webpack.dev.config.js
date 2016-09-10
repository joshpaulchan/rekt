var path = require('path');
var webpack = require('webpack');

// console.log("dirname", __dirname);
// console.log("joined dirname", path.join(__dirname, '../public/dist'));
// console.log("joined dirname for public", path.join(__dirname, '../public'));

module.exports = {
  devtool: 'eval',
  entry: [
    './client/index'
  ],
  output: {
    path: path.join(__dirname, '../public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, '../client')
    }]
  }
};
