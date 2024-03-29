const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
   mode: 'development',
   entry: './src/js/index.js',
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: '[name][ext]',
      clean: true,
   },
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },

         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,

            type: 'asset/resource',
         },
      ],
   },

   plugins: [
      new HtmlWebpackPlugin({
         title: 'Restaurant Page',
         filename: 'index.html',
         template: path.resolve(__dirname, './src/html/template.html'),
      }),
   ],
};
