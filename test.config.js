const path = require('path');

module.exports = {
  entry: './src/js/router.js',
  devServer: {
    contentBase: path.join(__dirname, 'test'),
    index: 'index.html',
    port: 3000,
    watchOptions: {
      poll: true
    }
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'test'),
    filename: 'router.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'Router'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }

}
