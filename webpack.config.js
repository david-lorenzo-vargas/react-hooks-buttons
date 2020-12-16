const path = require('path');

module.exports = ({ NODE_ENV }) => ({
  mode: NODE_ENV,
  entry: './client/app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 2,
                outputStyle: 'expanded',
                includePaths: [
                  path.resolve(__dirname, 'client/app/styles'),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
        // use: [
        //   {
        //     loader: 'file-loader',
        //     options: {
        //       outputPath: 'assets/images',
        //     },
        //   },
        // ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    publicPath: '/dist/',
    historyApiFallback: true,
    open: true,
  },
});
