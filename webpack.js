const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
	entry: {
		app: path.join(SRC_PATH, 'js', 'app.js')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /.(js|jsx)$/,
			exclude: /node_modules/,
			use: ['babel-loader']
		},{
			test: /\.(png|jpg|gif)$/,
			use: [{
				loader: 'file-loader',
				options: {}
			}]
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(SRC_PATH, 'index.html'),
			favicon: path.join(SRC_PATH, 'favicon.png')
		})
	]
};