const path = require('path');

module.exports = {
    entry: './src/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [
        { 
            test: /\.txt$/, 
            use: 'raw-loader' },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },

],
  },
};