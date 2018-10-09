const path = require('path');

module.exports = {
  entry: './src/js/router.js',
  devServer: {
    contentBase: [path.join(__dirname, '/'), path.join(__dirname, 'dist')],
    index: 'index.html',
    port: 9000,
    historyApiFallback: true
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'router.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'Router'
  }
};
