import React,{Component} from 'react'
import './login.css'
import $http from '../../utils/http.js'
import {Link} from 'react-router-dom'

class Login extends Component{
    constructor(){
        super()
        this.toLogin = this.toLogin.bind(this)
        this.wei = this.wei.bind(this)
        this.q = this.q.bind(this)
        this.bo = this.bo.bind(this)
    }
    render(){
        return <div id="register">
            <div className="head">
                <span>＜</span>
                <span>登陆717</span>
                <span><Link to='/register' style={{color:'#fc4141'}}>注册</Link></span>
            </div>
            <div className="sec">
                <p><input type="text" className='username' placeholder='请输入您的手机号' ref='username'/></p>
                <p><input type="password" className='password' placeholder='请输入您的密码' ref='password'/></p>
            </div>
            <button onClick={this.toLogin}>立即登陆</button>
            <div className="san">
                <p>使用第三方账户登陆</p>
                <dl onClick={this.wei}>
                    <dt></dt>
                    <dd>微信</dd>
                </dl>
                <dl onClick={this.q}>
                    <dt></dt>
                    <dd>QQ</dd>
                </dl>
                <dl onClick={this.bo}>
                    <dt></dt>
                    <dd>微博</dd>
                </dl>
            </div>
        </div>
    }
    wei(){
        this.props.history.push('/index/home')
    }
    q(){
        this.props.history.push('/index/home')
    }
    bo(){
        this.props.history.push('/index/home')
    }
    toLogin(){
        let {username,password} = this.refs;
        $http.post('/user/login',{
            username:username.value,
            password:password.value
        })
        .then(res=>{
            if(res.success == 1){
                let from = this.props.location.state ? this.props.location.state.from || 'index/home' : 'index/home'
                document.cookie = 'token=' + res.token;
                this.props.history.push(from)
            } else{
                alert('登陆出错')
            }      
        }) 
    }
}

export default Login;