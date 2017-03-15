module.exports = {
  entry: {
    app: "./app/assets/scripts/App.js"
  },
  output: {
    path: "./app/temp/scripts",
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
