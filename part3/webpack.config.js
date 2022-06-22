const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use:'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            //复制指定路径的html文件，并自动引入资源
            template: './src/index.html'
        })
    ],
    //用来引入，默认不知道ts也可以作为模块引入
    resolve: {
        extensions: ['.ts','.js']
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname,'dist'),
        //启动gzip压缩
        compress:true,
        port:3000,
        //自动打开浏览器
        open:true
    }
}
