var webpack = require('webpack');
var path = require('path');

 
module.exports = {
  entry: {
      app: "./public/app/App.js"
  },
  output: {
       filename: "public/build/bungle.js",
       sourceMapFilename: "public/build/bungle.map" 
    },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',        
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
};