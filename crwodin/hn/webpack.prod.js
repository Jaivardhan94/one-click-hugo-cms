const merge = require('वेबपैक-मर्ज');
const TerserPlugin = require('टेरसर-वेबपैक-प्लगइन');
const OptimizeCSSAssetsPlugin = require('अनुकूलन-सीएसएस-संपत्ति-वेबपैक-प्लगइन');
const MiniCssExtractPlugin = require('मिनी-सीएसएस-निकालें-प्लगइन');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'उत्पादन',
  output: {
    filename: '[name][हैश: 5]। जेएस',
    chunkFilename: '[id].[हैश:5].css'
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