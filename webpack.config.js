const path = require("path");
const rootPath = path.join(__dirname,'./');

const HtmlWebpackPlugin = require('html-webpack-plugin');
//抽出css檔案
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//自動產生html 靜態檔案對應
const CopyPlugin = require('copy-webpack-plugin');
const  WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[chunkhash].js',          //filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/, // /\.(sass|scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: { byPassOnDebug: true }
                    }
                ]
            }
        ]   //rules end
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: false,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new CopyPlugin([
            {
                from:'./src/vender/**/*.gif',
                to: './build/images/[name].[ext]',
                flatten: true
            },{
                from:'./src/vender/**/*.jpg',
                to: './build/images/[name].[ext]',
                flatten: true
            },{
                from:'./src/vender/**/*.png',
                to: './build/images/[name].[ext]',
                flatten: true
            },{
                from:'./src/vender/**/*.cur',
                to: './build/images/[name].[ext]',
                flatten: true
            }
        ]),
        new WriteFilePlugin()
    ],
    devServer: {
        open: true,
        contentBase: path.join(__dirname, '.'),
        compress: true,
        port: 9000
    }
};
