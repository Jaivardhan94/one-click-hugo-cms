const merge = require('वेबपैक-मर्ज');
const path = require('रास्ता');
const {CleanWebpackPlugin} = require('क्लीन-वेबपैक-प्लगइन');
const MiniCssExtractPlugin = require('मिनी-सीएसएस-निकालें-प्लगइन');
const common = require('./webpack.common');
module.exports = merge(common, {
  mode: 'विकास',
  output: {
    filename: '[name].js',
    chunkFilename: '[id].css'
  },
  devServer: {
    port: process.env.PORT || 3000,
    contentBase: path.join(process.cwd(), './dist'),
    watchContentBase: true,
    quiet: false,
    open: true,
    historyApiFallback: {
      rewrites: [{
          from: /./,
          to: '404.html'
        }]
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        'dist/**/*.js',
        'dist/**/*.css',
        'site/data/webpack.json'
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
});