const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
    proxy: {
      '/api': {
        target: 'https://full-stack-open-pokedex-dm8j.onrender.com',  // Replace with your Render backend URL
        pathRewrite: { '^/api': '' },     // Optional: remove /api prefix before forwarding
        changeOrigin: true,              // Optional: ensure the origin of the request is set correctly
      },
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
