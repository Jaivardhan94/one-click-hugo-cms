const webpack = require('webpack');
const path = require('道');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AssetsPlugin = require('アセット-webpack-プラグイン');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'index.js'),
    cms: path.join(__dirname, 'src', 'js', 'cms.js')
  },
  output: { path: path.join(__dirname, 'dist') },
  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader？name =/[hash]。[ext]'
      },
      {
        loader: 'バベルローダー',
        test: /\.js?$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'スタイルローダー',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new AssetsPlugin({
      filename: 'webpack.json',
      path: path.join(process.cwd(), 'site/data'),
      prettyPrint: true
    }),
    new CopyWebpackPlugin([{
        from: './src/fonts/',
        to: 'fonts/',
        flatten: true
      }]),
    new HtmlWebpackPlugin({
      filename: 'admin/index.html',
      template: 'src/cms.html',
      inject: false
    })
  ]
};