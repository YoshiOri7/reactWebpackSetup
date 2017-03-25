const path = require('path');

module.exports = {
  entry: "./app.jsx",
  output: {
    path: path.resolve( __dirname, 'dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}