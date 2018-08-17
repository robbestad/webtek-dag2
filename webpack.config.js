const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry:   path.resolve(__dirname, "src/index.js"),
	mode:    "development",
	output:  {
		path:     path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
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
			}
		]
	}

}
