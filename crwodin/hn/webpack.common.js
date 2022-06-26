const webpack = require('वेबपैक');
const path = require('रास्ता');
const CopyWebpackPlugin = require('कॉपी-वेबपैक-प्लगइन');
const MiniCssExtractPlugin = require('मिनी-सीएसएस-निकालें-प्लगइन');
const AssetsPlugin = require('संपत्ति-वेबपैक-प्लगइन');
const HtmlWebpackPlugin = require('एचटीएमएल-वेबपैक-प्लगइन');
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
        loader: 'फ़ाइल लोडर?नाम=/[hash]।[ext]'
      },
      {
        loader: 'बेबेल-लोडर',
        test: /\.js?$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'स्टाइल लोडर',
          MiniCssExtractPlugin.loader,
          'सीएसएस-लोडर',
          'पोस्टसीएसएस-लोडर',
          'सास-लोडर'
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