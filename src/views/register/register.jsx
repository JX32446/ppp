import React,{Component} from 'react'
import './register.css'
import $http from '../../utils/http.js'
import {Link} from 'react-router-dom'

class Register extends Component{
    constructor(){
        super()
        this.toRegister = this.toRegister.bind(this)
    }
    render(){
        return <div id="register">
            <div className="head">
                <span>＜</span> 
                <span>注册717</span>
                <span><Link to='/login' style={{color:'#fc4141'}}>登陆</Link></span>
            </div>
            <div className="sec">
                <p><input type="text" className='username' placeholder='请输入您的手机号' ref='username'/></p>
                <p><input type="password" className='password' placeholder='请输入您的密码' ref='password'/></p>
            </div>
            <button onClick={this.toRegister}>立即注册</button>
        </div>
    }
    toRegister(){
        let {username,password} = this.refs;
        $http.post('/user/register',{
            username:username.value,
            password:password.value
        })
        .then(res=>{
            if(res.success == 1){
                this.props.history.push('/login')
            }   
        })
    }
}
export default Register