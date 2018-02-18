const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'todo.js',
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [{
			test: /\.jsx?/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: true
			}
		}),
		new UglifyJsPlugin()
	],
	devtool: 'source-map'
};