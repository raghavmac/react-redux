const { resolve } = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = resolve(__dirname, 'dist');
const APP_DIR = resolve(__dirname, 'src');

const config = {
  devtool: 'eval',

  devServer: {
    hot: true,
    port: 8100,
    contentBase: APP_DIR,
    publicPath: '/'
  },

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  context: APP_DIR,

  entry: [
    'webpack-dev-server/client?http://localhost:8100',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './index.jsx',
  ],

  resolve: {
    extensions: [
      '*',
      '.js',
      '.jsx',
    ]
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        include: APP_DIR,
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2)$/,
        exclude: /node_modules/,
        use: 'url-loader',
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = config;
