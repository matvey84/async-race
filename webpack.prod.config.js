const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
			// {
			// 	test: /\.css$/i,
			// 	use: ['style-loader',
			// 		{
			// 			loader: 'MiniCssExtractPlugin.loader',
			// 			options: {
			// 				sourceMap: true,
			// 			},
			// 		}
			// 		,'css-loader'
			// 	],
		  // },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: 'text/css',
      filename: '[name].css',
    }),
  ],
};
