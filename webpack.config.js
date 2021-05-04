const htmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry : "./src/index.js",

    module : {
        rules  : [
            {
                test : "/\.css$/",
                use : ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                },
              },
        ],
    },
    output : {
        filename :"bundle.js",
        path : path.resolve(__dirname,"dist"),
    },
    plugins : [new htmlWebPackPlugin({
        template : './src/index.html'
    })],
};