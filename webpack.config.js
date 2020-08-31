const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV || 'development',
	entry: './src/index.ts',
	output: {
		filename: 'main.js',
		chunkFilename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: process.env.NODE_ENV === 'production' ? 'false' : 'source-map',
	resolve: {
		extensions: [ '.ts', '.js', '.jsx', '.tsx', '*' ],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: true
		}),
		new HtmlWebpackPlugin({
			title: '@jsugdd/monads'
		}),
	],
	module: {
		rules: [
			{ test: /\.(ts|js|jsx|tsx|mjs)$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		writeToDisk: true
	},
	optimization: {
		moduleIds: 'hashed',
		runtimeChunk: true
	},
	target: 'web',
};
