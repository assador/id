const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");

module.exports = {
	context: __dirname + "/src",
	entry: {
		index: "./index.jsx",
	},
	output: {
		path: __dirname + "/build",
		publicPath: "/build/",
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /.jsx?$/,
				include: [__dirname + "/src"],
				query: {
					presets: ["es2015", "react"]
				}
			}
		]
	},
	watch: NODE_ENV == "development",
/*
	watchOptions: {
		aggregateTimeout: 300
	},
*/
	devtool: NODE_ENV == "development" ? "cheap-inline-source-map" : false,
	plugins: NODE_ENV == "development" ? [
/*
		new webpack.optimize.CommonsChunkPlugin({
			name: "common",
		}),
*/
	] : [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				unused: false,
			},
			mangle: {
				keep_fnames: true,
			},
		}),
	],
}
