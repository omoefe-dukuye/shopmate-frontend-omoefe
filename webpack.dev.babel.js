/* eslint-disable import/no-extraneous-dependencies */
import merge from 'webpack-merge';
import common from './webpack.common';


export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    publicPath: '/dist/'
  }
});
