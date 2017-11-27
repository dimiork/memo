const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'source-map',
	module: {
		rules: [
			{
			  test: /\.less$/,
			  use: ExtractTextPlugin.extract({
			    fallback: 'style-loader',
			      use: ['css-loader', 'less-loader']
			    })
			},
		]
	},
  plugins: [
  	new ExtractTextPlugin("[name].bundle.css"),
    new UglifyJSPlugin({
    	sourceMap: true
    })
  ]
});