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
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(SRC_PATH, 'index.html')
		})
	]
};