var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var babel_loader = 'babel?presets[]=react,presets[]=es2015,compact=false';

module.exports = {
  target: 'node',
  node: {
    fs: 'empty',
    net: 'empty',
    // 防止打包错乱
    __filename: true,
    __dirname: true
  },
	entry: {
		app: [
			path.resolve(__dirname, '../server/server.js')
		]
	},
	output: {
		path: path.resolve(__dirname, '../server/public'),
		filename: '[name].js'
	},
	module: {
		loaders: [
      {
        test: /\.js/,
        loaders: [babel_loader],
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('style', ['css'])
      },
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract('style', ['css', 'less'])
      },
      {
        test: /\.png$/,
        loader: "url?limit=100000"
      }, 
      {
        test: /\.(jpg|svg)$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
	},
	plugins: [
		new ExtractTextPlugin('[name].css'),
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
	]
}