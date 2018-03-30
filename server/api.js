const jwt = require('jsonwebtoken');
const http = require('http')
const querystring = require('querystring')
const fs = require('fs');

function queryApi(url,methods,params){
    return new Promise((resolve,reject)=>{
        let data = '';
        const options = {
            hostname: 'www.lb717.com',
            port: 80,
            path: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        };
        let request = http.request(options, (response) => {
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                resolve(JSON.stringify(data))
            });
        })
        if(methods.toLowerCase()=='post'){
            request.write(querystring.stringify(params))
        }  
        request.end()
    })
}

module.exports = function (app) {
    //商品列表的接口
    app.post('/mall/index/getGoodsChannel', function (req, res) {
        queryApi('/mall/index/getGoodsChannel','post',req.body)
        .then((data)=>{
            res.end(data);
        })
    })

    
    //注册接口
    app.post('/user/register', function (req, res) {
        console.log(req.body);
        let user = fs.readFileSync('user.json', {encoding: 'utf-8'})
        user = JSON.parse(user);
        user.push(req.body)
        console.log(user)
        fs.writeFile('user.json', JSON.stringify(user), function () {
            res.end(JSON.stringify({"success": 1, "info": "success"}))
        })
    })

    // 登陆接口
    app.post('/user/login', function (req, res) {
        let user = fs.readFileSync('user.json', {encoding: 'utf-8'})
        user = JSON.parse(user);
        let login = req.body
        let resInfo = {
            success: 0,
            info: '用户名或密码错误',
            token: ''
        }
        user.forEach(user => {
            if (user.username == login.username && user.password == login.password) {
                resInfo.success = 1;
                resInfo.info = '恭喜你，登陆成功'
            }
        })

        // 加密
        if (resInfo.success == 1) {
            resInfo.token = jwt.sign(login, "zjx", {
                expiresIn: 60 *60 //超时时间
            })
        }

        res.end(JSON.stringify(resInfo))
    })

    // 添加购物车
    app.post('/user/Cart/addCart', function (req, res) {
        console.log(req.body);
        jwt.verify(req.body.token, 'zjx', (err, decoded) => {
            if (err) {
                console.log(err);
                res.end(JSON.stringify({info: '超时，重新登陆', detail: err.TokenExpiredError}))
            } else {
                let cartInfo = JSON.parse(fs.readFileSync(__dirname + '/cart_info.json', {encoding: 'utf-8'}))
                if (cartInfo[decoded.username]) {
                    cartInfo[decoded.username].push[req.body.goods_info]
                } else {
                    cartInfo[decoded.username] = [req.body.goods_info]
                }
                fs
                    .writeFile(__dirname + '/cart_info.json', JSON.stringify(cartInfo), function () {
                        res.end('okok成功')
                    })
            }
        })
    })

    // 列表接口
    app.get('/mobile/Category/categorySon', function (req, res) {
        console.log(req.query);
        let tbdata = 'https://acs.m.taobao.com/h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/?appKey=12574478&t=1521818834785&sign=fe1fca65c1a9e4d14e73b4194492fdf1&api=mtop.relationrecommend.WirelessRecommend.recommend&v=2.0&type=jsonp&dataType=jsonp&callback=mtopjsonp3&data=%7B%22appId%22%3A%223113%22%2C%22vm%22%3A%22nw%22%2C%22params%22%3A%22%7B%5C%22industry%5C%22%3A%5C%223%5C%22%2C%5C%22catmap_version%5C%22%3A%5C%222.0%5C%22%7D%22%2C%22nxtype%22%3A%22h5%22%7D';
        queryApi(tbdata,'get')
        .then(data=>{
            console.log(data);          
        })
        res.json(1)
    })
}