const path = require('path');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// change this to your local instance of the CSSS API
// source: https://github.com/csss/csss-site-backend
// (if changed, don't commit your change please!)
const API_INSTANCE = 'http://localhost:3049';

module.exports = {
  entry: {
    react: ['react', 'react-dom'],
    main: {
      import: './src/main/index.js',
      dependOn: 'react'
    }
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
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 8080,
    proxy: [
      {
        context: ['/api'],
        target: API_INSTANCE
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      openAnalyzer: false
    })
  ]
};
