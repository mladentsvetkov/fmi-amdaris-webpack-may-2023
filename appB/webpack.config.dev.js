const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    entry: './moduleB.js',
    mode: 'development',
    devServer: {
        port: 3002,
    },
    output: {
        publicPath: 'http://localhost:3002/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // Set the limit to 300 KB (300 * 1024 bytes)
                            limit: 300 * 1024,
                            // For larger files, save them in the 'images' folder with a hashed name
                            fallback: 'file-loader',
                            name: 'images/[name].[hash:8].[ext]',
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
            name: 'moduleB',
            filename: 'remoteEntry.js',
            exposes: {
                './ModuleB': './moduleB.js',
            },
            remotes: {
                mainApp: 'mainApp@http://localhost:3000/remoteEntry.js',
            },
        }),
    ],
}
