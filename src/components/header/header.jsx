import React,{Component} from 'react'
import Img from '../../static/img/1.gif'
import './header.css'
class Header extends Component{
    constructor(){
        super()
        this.toSearch = this.toSearch.bind(this)
    }
    toSearch(){
        // console.log(this.props.match);
        let {history} = this.props.match;
        history.push('/index/search')
    }
    render(){
        return <div id="header">
            <ul>
                <li><img src={Img} alt=""/></li>
                <li><input type="text" onFocus={this.toSearch}/></li>
                <li>
                    <span className='iconfont icon-dianpu'></span>
                    <span>我的店铺</span>
                </li>
                <li>
                    <span className='iconfont icon-xiaoxi'></span>
                    <span>消息</span>
                </li>
            </ul>
        </div>
    }
}

export default Header