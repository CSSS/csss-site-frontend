const path = require('path');

module.exports = {
  entry: {
    // NOTE: new React apps should be listed here
    main: './src/main/index.js'
  },
  output: {
    filename: 'static/js/[name].js',
    path: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
