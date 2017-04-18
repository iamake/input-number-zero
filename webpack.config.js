const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = __dirname;

module.exports = {
  entry: {
    app: [
      path.join(root, 'src/index.js'),
    ],
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(root, 'src'),
        loaders: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(root, 'index.html'),
    }),
  ],
  devServer: {
    port: 8000,
    historyApiFallback: true,
  },
};
