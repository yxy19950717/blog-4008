var path = require('path');
var webpack = require('webpack');
var babel_loader = 'babel?presets[]=react,presets[]=es2015';

module.exports = {
  entry: {
    client: [
      path.resolve(__dirname, '../views/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../server/public'),
    filename: '[name].js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js/,
        loaders: ['react-hot', babel_loader],
        include: path.resolve(__dirname, '../'),
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less/,
        loader: 'style!css!less!'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url?limit=100000',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
      }
    ]
  }
}