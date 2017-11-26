const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = {
  entry: {
    index: [
      'regenerator-runtime/runtime',
      './src/index'
    ]
  },
  watch: false,
  context: __dirname,
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    pathinfo: false,
    libraryTarget: 'commonjs'
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            [ 'env' , {
              targets: {
                node: '5'
              }
            }]
          ],
          plugins: [
            'transform-function-bind',
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals({})]
}
