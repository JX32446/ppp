const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./api.js');
app.use(bodyParser.json());

// 设置跨域
app.all("*",function(req,res,next){
    //支持跨域
    res.header('Access-Control-Allow-Origin',"http://localhost:8080")
    //允许请求头字段
    res.header('Access-Control-Allow-Headers','Content-Type,Token')
    //响应
    res.header('Content-Type','application/json;charset=utf-8')
    next()
})

// 启动后端接口
api(app);
// console.log(api);

app.listen(9000,function(){
    console.log('server listen 9000')
})

const querystring = require('querystring')