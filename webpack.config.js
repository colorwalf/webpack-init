const path = require("path");
const rootPath = path.join(__dirname,'./');

//抽出css檔案
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const extractSass = new MiniCssExtractPlugin({
    filename: "[name].min.css", //filename: "[name].[contenthash].css",
    chunkFilename: '[id].css',
    ignoreOrder: false, // Enable to remove warnings about conflicting order
});

module.exports = {
    mode:'development',
    entry: {
        styles: `${rootPath}src/styles/index.scss`,
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true,
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]   //rules end
    },
    plugins: [
        extractSass,
    ]
};
