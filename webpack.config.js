var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require('path');

const isProd = false;

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js",
        publicPath: isProd ? '/' : 'http://localhost:9000/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                // HTML LOADER
                // Reference: https://github.com/webpack/html-loader
                // Allow loading html through js
                test: /\.html$/,
                loader: 'html-loader'
              }
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/public/index.html',
        inject: 'body'
    }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, './src/public')
        }])
    ],

    devServer: {
        contentBase: './src/public',
        port: 9000
    }

    // Other options...
};