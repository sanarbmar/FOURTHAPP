const path = require('path')
const basePath = __dirname
const disPath = 'dist'
module.exports = {
    mode: 'development',
    entry: {
        app:["@babel/polyfill", "../src/index.html"],
    },
    module:{
        rules: [
            {
                test: /\.jsx/,
                exclude:/node_modules/,
                use:['babel-loader'],
            },
        ],
    },
    output:{
        path: path.join(basePath, disPath),
        filename: 'bundle.js',
    },
};