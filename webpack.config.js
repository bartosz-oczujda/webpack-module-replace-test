const webpack = require("webpack")
const path = require("path");

module.exports = {

    entry: './src/index.ts',
    output: {
        filename: 'dist/bundle.js'
    },

    // Currently we need to add '.ts' to the resolve.extensions array. 
    resolve: {
        extensions: ['.ts', '.js']
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },

    // Source maps support ('inline-source-map' also works) 
    devtool: 'source-map',

    // Add the loader for .ts files. 
    module: {
        loaders: [
            {
                test: /\.ts/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /Tester.ts/,
            '../src_repl/Tester_repl.ts'
        )
    ]
};