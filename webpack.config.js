const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "static/js/[name].[hash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "static/css/[id].[hash].css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					devMode
						? {
							loader: "style-loader",
						}
						: {
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: "/",
							},
						},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						cacheDirectory: true,
					},
				},
			},
		],
	},
};