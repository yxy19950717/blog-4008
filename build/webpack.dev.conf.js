var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var babel_loader = 'babel?presets[]=react,presets[]=es2015';

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../views/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../views/dist'),
    filename: '[name].js',
    publicPath: '/'
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
  },

  devtool: '#eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname +　'/../views/index.html'),
      inject: true
    })
  ]
}