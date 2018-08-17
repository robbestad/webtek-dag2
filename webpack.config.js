const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = {
	entry:   path.resolve(__dirname, "src/index.jsx"),
	mode:    "development",
	output:  {
		path:     path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				title:    'Bedre enn Instagram',
				template: path.resolve(__dirname, "src/index.html")
			}
		)
	],
	module:  {
		rules: [
			{
				test: /\.jsx?$/,
				use:  [
					{
						loader: "babel-loader"
					}
				]
			},
			{
				test: /\.css$/,
				use:  [
					{loader: "style-loader"},
					{loader: "css-loader"}
				]
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx", ".css"],
		alias:      {
			src: path.resolve(__dirname, "src")
		}
	}
}
module.exports.serve = {
	content: [__dirname],
	add:     (app, middleware, options) => {
		const historyOptions = {
			rewrites: [
				{from: /\/*bundle.js$/, to: '/bundle.js'}
			],
			index:    '/index.html',
			logger:   console.log.bind(console)
		};
		app.use(convert(history(historyOptions)));
	}
}
