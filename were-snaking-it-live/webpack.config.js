'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Customized babel loader with the minimum we need to get `mdx` libraries
// working, which unfortunately codegen JSX instead of JS.
const babelLoader = {
  loader: require.resolve('babel-loader'),
  options: {
    // Use user-provided .babelrc
    babelrc: true,
    // ... with some additional needed options.
    presets: [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-typescript'),
    ],
  },
};

/**
 * Base configuration for the CLI, core, and examples.
 */

module.exports = {
  mode: 'development',
  entry: './src/deck.tsx', // Default for boilerplate generation.
  output: {
    path: path.resolve('dist'),
    filename: 'deck.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devtool: 'source-map',
  module: {
    // Not we use `require.resolve` to make sure to use the loader installed
    // within _this_ project's `node_modules` traversal tree.
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: [babelLoader],
      },
      // `.md` files are processed as pure text.
      {
        test: /\.(md|txt)$/,
        use: [require.resolve('raw-loader')],
      },
      // `.mdx` files go through babel and our mdx transforming loader.
      {
        test: /\.mdx$/,
        use: [babelLoader, require.resolve('spectacle-mdx-loader')],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
        use: [require.resolve('file-loader')],
      },
    ],
  },
  // Default for boilerplate generation.
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Spectacle presentation',
      template: './src/index.html',
    }),
  ],
};
