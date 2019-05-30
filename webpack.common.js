/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'mini-css-extract-plugin';
import dotenv from 'dotenv';

const env = process.env.NODE_ENV;
dotenv.config({ path: `.env.${env === 'test' ? 'test' : 'development'}` });


export default {
  entry: ['@babel/polyfill', './src/client/app.jsx'],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.(js|jsx)$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        ExtractTextPlugin.loader, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles.css' }),
    new webpack.EnvironmentPlugin([
      // 'FIREBASE_API_KEY',
    ])
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.png', '.svg', '.ico', '.jpg']
  }
};
