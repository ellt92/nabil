const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ENV = process.env.NODE_ENV || 'production';


module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './js/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    devtool: (ENV === 'development') ? 'eval-source-map' : false,
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
        },
        modules: [
            path.join(__dirname, './src/js'),
            "node_modules"
        ],
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, './src/js'),
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader'
                }],
            },
            {
                test: /\.(png|jpg|gif|eot|svg|ttf|woff|woff2|otf|mov)$/,
                loader: 'file-loader',
            },
            {
                test: /\.css$/,
                include: [/node_modules/],
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            title: 'Nabil Portfolio',
            favicon: 'favicon.jpg',
            template: 'index.ejs'
        })
    ]
};
