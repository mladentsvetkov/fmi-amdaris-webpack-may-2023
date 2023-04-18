// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    devServer: {
        port: 3000,
    },
    output: {
        publicPath: 'http://localhost:3000/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon: './favicon.ico',
        }),
        new ModuleFederationPlugin({
            name: 'mainApp',
            filename: 'remoteEntry.js',
            exposes: {
                './incrementCounterA': './src/main.js',
                './incrementCounterB': './src/main.js',
                './who_am_i': './src/main.js',
            },
            remotes: {
                moduleA: 'moduleA@http://localhost:3001/remoteEntry.js',
                moduleB: 'moduleB@http://localhost:3002/remoteEntry.js',
            },
        }),
    ],
}
