// 同源策略：1.协议相同 2.域名相同 3.端口号相同
// 基于fetch封装的请求方法，支付get和post

//本地测试服务器的域名
let domin
if(process.env=='development'){
    domin = 'http://localhost:9000'
}
if(process.env == 'production'){
    domin = 'http://www.lb717.com'
}

let $http = {
    get(url,data){
        // 判断数据类型是否是对象
        console.log(Object.prototype.toString.call(data));

        if(Object.prototype.toString.call(data) != '[object Object]'){
            return {
                then(callback){
                    callback('get请入参格式不正确，需要传object');
                    return {
                        catch(err){
                            err(new Error('入参格式不正确'))
                        }
                    }
                }
            }
        }
        let queryString="?"
        for(let i in data){
            queryString += (i+"="+data[i]+"&")
        }
         // 编码处理encodeURI
        url = encodeURI(url+queryString.slice(0,-1))
        // console.log(queryString);
        return fetch(domin+url,{
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            }
        }).then(res=>res.json('1'))
    },
    post(url,data){
        if(Object.prototype.toString.call(data) != '[object Object]'){
            return {
                then(callback){
                    callback('get请入参格式不正确，需要传object');
                    return {
                        catch(err){
                            err(new Error('入参格式不正确'))
                        }
                    }
                }
            }
        }
        return fetch(domin+url,{
            body:JSON.stringify(data),//字符串
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            },
            method:"POST"
        }).then(res=>res.json('1'))
    },
    jsonp(url,callbackName){
        return new Promise((resolve,reject)=>{
            window[callbackName] = function(data){
                resolve(data);
            }
            let script = document.createElement('script');
            let body = document.body;
            script.src = url;
            body.appendChild(script)
        })
    }
}
export default $http