const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Node_ENv for runs on the environment like prod ,testing,qa valid values are =development or production or test
process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development', //identifies as devlopment mode
  target: 'web',
  //devtool should be smmall letter
  devtool: 'cheap-module-source-map',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'), //_ dirnmae is giving current directory path
    //publcicpath it specifies output directory in the browser
    publicPath: '/',
    //output filename bundle.js ,physical file won't be generated but it needs for the refernce.
    filename: 'bundle.js'
  },
  devServer: {
    stats: 'minimal',
    overlay: true,
    // it specifies all request needs to be send in to index.html file
    //this way we can load deeploading all handle by react router
    historyApiFallback: true,
    //these below three lines needed bcz of webpack latest issue.
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false
  },
  plugins: [
    // defineplugin webpack will replace process.env.Api_URL anywhere in our code with the url we've specified
    new webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://localhost:5000')
    }),

    //it accepts the object to configure the plugin
    new HtmlWebpackPlugin({
      //it tells the html path
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  // modules tells webpack which file needs to be handled
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // load babrl loaders and eslint
        use: ['babel-loader', 'eslint-loader']
      },
      {
        // webpack will bundle ALL OVER CSS FILE AS SINGLE FILE
        test: /(\.css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // this is for image url to compile example logo.svg file
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};
