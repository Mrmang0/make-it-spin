 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 const webpack = require('webpack');

 module.exports = {
     entry: {
         app: './src/index.js',
     },
     plugins: [
         new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
             title: 'Production',
             inject: true,
             template: './src/index.html'
         }),
         new webpack.HotModuleReplacementPlugin(),
         new MiniCssExtractPlugin({
             filename: "[name].css",
             chunkFilename: "[id].css",
         }),
     ],
     output: {
         filename: '[name].bundle.js',
         path: path.resolve(__dirname, 'dist')
     },

     module: {
         rules: [{
                 test: /\.css$/,
                 use: [{
                         loader: MiniCssExtractPlugin.loader,
                         options: {
                             // you can specify a publicPath here
                             // by default it use publicPath in webpackOptions.output
                             publicPath: '../'
                         }
                     },
                     "css-loader"
                 ]
             },
             {
                 test: /\.(html)$/,
                 use: {
                     loader: 'html-loader',
                     options: {
                         attrs: [':data-src']
                     }
                 }
             }
         ]
     }
 };