const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "bundle.js",
        // 告诉webpack不使用箭头函数，ie不支持
        environment: {
            arrowFunction: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets:[
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    {
                                        //要兼容的目标浏览器
                                        targets: {
                                            "chrome" : "88",
                                            "ie":"11"
                                        },
                                        //指定corejs版本
                                        "corejs":"3",
                                        //使用corejs方式
                                        //usage表示按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'],
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
