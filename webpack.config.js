const path = require('path');

module.exports = {
  entry: './src/js/router.js',
  devServer: {
    contentBase: './src'
  },
  optimization: {
   minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'router.js'
  }
};
