const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const EslintPlugin = require('eslint-webpack-plugin');

const baseConfig = {
  // entry: path.resolve(__dirname, './src/index.ts'),
  entry: path.resolve(__dirname, './src/index.js'),
  devtool: 'source-map',
  mode: 'development',
  module: {
		
    rules: [
			// {
			// 	test: /\.css$/i,
			// 	use: ['style-loader', 'css-loader']
			// },
				// {
				// 	loader: 'css-loader',
				// 	options: {
				// 		sourceMap: true,
				// 	},
				// }
				//,'css-loader']
		  // },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, './src/')],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: ['file-loader'],
        type: 'asset/resource',
      },
			{
        test: /\.(ttf|woff)$/i,
				use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
		// new EslintPlugin({ extensions: 'ts'}),
  ],
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
