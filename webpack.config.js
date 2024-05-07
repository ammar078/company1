const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry:'./src/js/index.js',
  
  
  module: {

    rules: [

      {

        test: /\.(sass|css|scss)$/,

        use: [

          MiniCssExtractPlugin.loader,

          "css-loader",

          "sass-loader",

        ],
      },
      {

        test: /\.(png|jpe?g|gif)$/i,

        use: [

          {

            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "images",
            }

          },

        ],

      },
      {

        test: /\.html$/i,

        loader: 'html-loader',

      },
      
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],

      },
      devServer: {
        contentBase: path.join(__dirname, 'build'),
        // compress: true,
        port: 9000,
        writeToDisk: true,
        stats: 'errors-only',
        open: true,
        
    },
  plugins: [
    new HtmlWebpackPlugin({
      template:'index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template:'projects.html',
      filename: 'projects.html',
    }),
    new HtmlWebpackPlugin({
      template:'projects-details.html',
      filename: 'projects-details.html',
    }),
    new HtmlWebpackPlugin({
      template:'blog.html',
      filename: 'blog.html',
    }),
    new HtmlWebpackPlugin({
      template:'blog-details.html',
      filename: 'blog-details.html',
    }),
    new HtmlWebpackPlugin({
      template:'add-blog.html',
      filename: 'add-blog.html',
    }),
    new HtmlWebpackPlugin({
      template:'about.html',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template:'contact.html',
      filename: 'contact.html',
    }),
    new MiniCssExtractPlugin()
  ],
};