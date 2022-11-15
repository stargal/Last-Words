const path = require('path');
const webpack = require('webpack');
const WebpackObfuscator = require('webpack-obfuscator');
const obfuscatorOption = require("./obfuscator.js");

module.exports = {
  mode: 'production',
  entry: {
    main: './src/main.ts',
  },
  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'dist/Scripts'),
    clean: true,
  },

  optimization: {
    minimize: false,
  },

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new WebpackObfuscator(obfuscatorOption),
  ],
  // devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
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
};
