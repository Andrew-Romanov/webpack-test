const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'my-bundle.js',
  },
  devServer: {
    port: 4444,
    open: true,
    stats: 'errors-only',
  },
};