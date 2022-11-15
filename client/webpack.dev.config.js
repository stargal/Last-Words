const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.ts',
  },
  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  cache: {
    type: 'filesystem'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },

  optimization: {
    runtimeChunk: 'single',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new HtmlWebpackPlugin(),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
};

