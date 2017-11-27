const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	module: {
		rules: [
			{
			  test: /\.less$/,
			  use: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }
});