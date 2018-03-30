// console.log(process.env.NODE_ENV)
//set NODE_ENV=development && webpack   cmd

//dev :起服务，不用进行压缩
//build:不用起服务，要进行压缩，代码分离
let path=require('path');
let dir = process.cwd();  // 获取当前程序运行的目录
console.log(dir);

let baseConfig ={
    entry:{
        "bundle":dir+'/src/main'
    },
    output:{
        "path":dir+'/dist',
        "filename":"[name].js"
    }, 
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(eot|svg|ttf|woff)$/,
                use:['url-loader']
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:['url-loader']
            }
        ]
    },
    plugins:[]
}
module.exports = baseConfig;