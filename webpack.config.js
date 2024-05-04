const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, 'src', 'index.tsx'),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'inline-source-map',
    mode: 'development',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'weekday.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader', 'postcss-loader'],
            // },
        ],
    },
    externals: {
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './', 'index.html'),
        }),
    ],
    devServer: {
        static: path.join(__dirname, './'),
        compress: true,
        hot: true,
        port: 8000,
        open: true,
    },
};
