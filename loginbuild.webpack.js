module.exports = {
  entry: './src/logintest.jsx',
  output: {
    filename: 'logintest.js',
    path: './build'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
