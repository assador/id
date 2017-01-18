const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
	context: __dirname + "/src",
	entry: {
		app: "./app.jsx",
	},
	output: {
		path: __dirname + "/build",
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
	devtool: NODE_ENV == "development" ? "cheap-inline-source-map" : null,
	plugins: NODE_ENV == "development" ? [
	] : [
		new webpack.optimize.UglifyJsPlugin(/*{
			compress: {
				keep_fnames: true,
				unused: false,
			}
		}*/),
	],
}
