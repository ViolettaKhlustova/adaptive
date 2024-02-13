const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    styles: path.resolve('./styles/index.scss')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        oneOf: [
          {
            use: [
              MiniCssExtractPlugin.loader,
              {loader: 'css-loader'},
              {loader: 'sass-loader'}
            ]
          },
        ],
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            use: [
              MiniCssExtractPlugin.loader,
              {loader: 'css-loader'}
            ]
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname),
    port: 5000
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ]
  }
}