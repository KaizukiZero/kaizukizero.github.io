const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
  },


  plugins: [new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new HtmlWebpackPlugin({
      title: 'Kaizuki-Portfolio',
      filename: '../index.html',
      template: './src/index.html',
      minify: true,
      scriptLoading: 'blocking',
    })

  ],

  module: {
    rules: [{
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },


};