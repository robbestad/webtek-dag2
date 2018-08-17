const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
				title: 'Bedre enn Instagram',
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
	resolve:{
		extensions: [".js", ".jsx"],
		alias: {
			src: path.resolve(__dirname ,"src")
		}
	}

}
