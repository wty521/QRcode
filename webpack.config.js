const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, './example/index.jsx'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.(less|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'example',
      template: './index.html',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    // }),
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
    },
  },
  devtool: '#source-map',
  // devServer: {
  //   contentBase: path.resolve(__dirname, "./example"),
  //   port: 8113,
  //   host: 'localhost',
  //   compress: true
  // }
};
