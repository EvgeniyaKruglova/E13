const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        hot: true,
    },
    output: {
        filename: 'main.js',
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    esModule: true,
                },
            },
                'css-loader'
            ]
        }, {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        }]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },

};