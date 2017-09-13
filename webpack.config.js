module.exports = {
  entry: './js/entry.js',
  output: {
    filename: './bundle.js',
  },
  plugins: plugins,
  module: {
    loaders: [
      test: [/\.js?$/],
      exclude: /(node_modules)/
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*']
  }
};
