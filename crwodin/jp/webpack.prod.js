const merge = require('webpack-マージ');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('最適化-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: '製造',
  output: {
    filename: '[name][hash：5] .js',
    chunkFilename: '[id][ハッシュ：5] .css'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        exclude: /\/node_modules\//
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[hash:5].css',
        chunkFilename: '[id].[hash:5].css'
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
});