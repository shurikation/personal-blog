const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/index.js',
      './src/style.scss'
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: './dist',
    stats: 'errors-only'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        test: /\.js(\?.*)?$/i,
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: true
    }),
    new HTMLWebpackPlugin({
      filename: './pages/suppke.html',
      template: './src/pages/suppke.html',
      minify: true
    }),
    new HTMLWebpackPlugin({
      filename: './pages/notebook-app.html',
      template: './src/pages/notebook-app.html',
      minify: true
    }),
    new HTMLWebpackPlugin({
      filename: './blog/post-template.html',
      template: './src/blog/post-template.html',
      minify: true
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets'),
          to: path.resolve(__dirname, 'dist', 'assets'),
          globOptions: {
            ignore: [
              '**/*.scss',
              '**/*.js'
            ],
          },
        },
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg|pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: './src'
            }
          },
        ],
      },
    ],
  },
};