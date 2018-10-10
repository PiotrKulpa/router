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
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'router.js',
    libraryTarget: 'umd',
    globalObject: 'this',
    library: 'Router'
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitError: true,
        }
      },
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
};
