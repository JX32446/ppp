import React,{Component} from 'react'
import './mine.css'

class Mine extends Component{
    constructor(){
        super()
        this.setting = this.setting.bind(this);
    }
    setting(){
        this.props.history.push('/setting')
    }
    render(){
        return <div id="mine">
            <header>
                <p>
                    <span className='iconfont icon-fanhui' onClick={this.setting}></span>
                    <span>我的717商城</span>
                </p>
            </header>
        </div>
    }
}

export default Mine