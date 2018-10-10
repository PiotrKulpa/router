const path = require('path');

module.exports = {
  entry: './src/js/router.js',
  devServer: {
    contentBase: path.join(__dirname, '/')
  },
  optimization: {
   minimize: false
  },
  output: {

    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'router.js'
  }
};
