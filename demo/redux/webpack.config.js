const path = require('path');
const webpack = require('webpack');

module.exports = (APP) => ({
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    `./apps/${APP}/index`
  ],
  output: {
    path: path.join(__dirname, APP, 'dist'),
    filename: 'bundle.js',
    publicPath: `/apps/${APP}/static/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'apps'),
      loaders: ['babel']
    }, {
      test: /\.styl$/,
      include: path.join(__dirname, 'styles'),
      loader: 'style-loader!css-loader!stylus-loader'
    }, {
      test: /\.json$/,
      include: path.join(__dirname, 'data'),
      loader: 'json'
    }]
  }
});
