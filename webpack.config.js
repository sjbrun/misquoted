const path = require('path');

console.log(path.join(__dirname, 'public'))

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(ttf|eot|woff|woff2)$/,
            loader: 'file-loader',
            exclude: /node_modules/,
            options: {
              name: '[path]][name].[ext]'
            },
          },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};
