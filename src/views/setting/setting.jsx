import React,{Component} from 'react'
import './setting.css'
import {onLoginOut} from '../../utils/utils.js'

class Setting extends Component{
    constructor(){
        super()
        this.onLoginOut = this.onLoginOut.bind(this)
    }
    onLoginOut(){
        onLoginOut()
        this.props.history.push('/index/home')
    }
    render(){
        return <div id="setting">
            <header>
                <span className='iconfont icon-buoumaotubiao52'></span>
                <span>设置</span>
            </header>
            <footer>
                <button onClick={this.onLoginOut}>退出登录</button>
            </footer>
        </div>
    }
}

export default Setting
