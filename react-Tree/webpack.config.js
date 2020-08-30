const webapck = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: {
            index: 'index.html'
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader' // 把ts进行加载和编译
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'source-map-loader' // 方便调试
            },
            {
                test: /\.less?$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}