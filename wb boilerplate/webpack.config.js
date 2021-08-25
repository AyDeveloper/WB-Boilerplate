const path = require('path');

module.exports = {
    entry: './src/script.js',
    output : {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'app.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        }
    }, 
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}