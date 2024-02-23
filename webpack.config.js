const path = require("path");

module.exports = {
  entry: {
    main: './src/main/index.js',
    test: './src/test/index.js'
  },
  output: {
    filename: "js/[name].js",
    path: path.join(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg)$/,
        use: ["url-loader"],
      }
    ]
  }
};
