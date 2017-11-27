const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: {
  	app: './src/app.js',
  	// print: './src/print.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
  	rules: [
      // {
      //   test: /\.less$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'less-loader']
      //   })
      // },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
   //    {
   //      test: /\.(png|svg|jpg|gif)$/,
   //      use: [
   //        'file-loader'
   //      ]
   //    }
    ]
  },
  plugins: [
  		new UglifyJSPlugin(),
  		new CleanWebpackPlugin(['dist']),
      // new ExtractTextPlugin("styles.css"),
      new HtmlWebpackPlugin({
      	title: 'Output Management'
      }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
  ]
};