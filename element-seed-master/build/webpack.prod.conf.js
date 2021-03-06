// 定义编译环境
process.env.NODE_ENV = 'production'
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')
const utils = require('./utils')

module.exports = merge(baseWebpackConfig, {
  output: {
    path: config.build.assetsRoot,//输出文件夹
    publicPath: config.build.assetsPublicPath,// 发布路径,可以是/ 或者是http://yourdomain/的形式
    filename: utils.assetsPath('js/[name].js?_=[chunkhash]'),//输出文件命名规则
    chunkFilename: utils.assetsPath('js/[id].js?_=[chunkhash]')
  },
  mode: 'production',//模式
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  optimization: {
    minimize: true,
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all' //代码切分
    },
    minimizer: [
      // 对js文件进行压缩
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        uglifyOptions: {
          sourceMap: true,
          mangle: false //
        }
      })
    ]
  },
  externals: {},
  plugins: [
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: utils.resolve('index.html'),
      inject: true,
      minify: {
        removeComments: true,//移除注释
        collapseWhitespace: true, //合并多余空格
        removeAttributeQuotes: true//移除分号
        // 更多选项请参见:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      // chunksSortMode: 'dependency'
    }),
    new webpack.DefinePlugin({
      'process.env': require('../config/prod.env'),
      'CONTEXT_PATH': config.build.assetsPublicPath
    }),
    new MiniCssExtractPlugin({
      path: utils.assetsPath('css'),
      filename: '[name].css?_=[chunkhash]',
      chunkFilename: utils.assetsPath('css/[id].css?_=[chunkhash]')
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    //压缩css文件
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? {safe: true, map: {inline: false}}
        : {safe: true}
    }),
    // 复制静态资源到目录中，如果有更多需要复制的资源，请在这里添加
    new CopyWebpackPlugin([{
      from: utils.resolve('static'),
      to: config.build.assetsSubDirectory,
      ignore: ['.*']
    }])
  ]
})
