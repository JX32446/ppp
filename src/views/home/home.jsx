import React,{Component} from 'react'
import $http from '../../utils/http.js'
import Header from '../../components/header/header.jsx'
import Swiper from '../../components/swiper/swiperComp.jsx'
import './home.css'
import GoodsItem from '../../components/goodsComp/goodsComponent.jsx'

class Home extends Component{
    constructor(){
        super()
        this.state = {
            goodslist:[],
            channel_id:3,
            flag:true
        }
        this.scrolling = this.scrolling.bind(this);
    }
    render(){
        return <div id='home' onScroll={this.scrolling} ref='scroller'>
            <div ref='doc'>
                <header>
                    <Header match={this.props}></Header>
                </header>
                <div>
                    <Swiper></Swiper>
                </div>
                <section className='sectionaaa'>
                    <dl>
                        <dt><img src={require('../../static/img/11.gif')} alt=""/></dt>
                        <dd>家乡味道</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/2.gif')} alt=""/></dt>
                        <dd>进口食品</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/3.gif')} alt=""/></dt>
                        <dd>牛奶乳品</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/4.gif')} alt=""/></dt>
                        <dd>茶果冲饮</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/5.gif')} alt=""/></dt>
                        <dd>休闲零食</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/6.gif')} alt=""/></dt>
                        <dd>米面粮油</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/7.gif')} alt=""/></dt>
                        <dd>调味调料</dd>
                    </dl>
                    <dl>
                        <dt><img src={require('../../static/img/8.gif')} alt=""/></dt>
                        <dd>酒水饮料</dd>
                    </dl>
                </section>
                <div className='goods-list ks-clear'>
                    {
                        this.state.goodslist.map((item,index) => {
                            return <GoodsItem key={index} data={item} history={this.props.history} location={this.props.location}></GoodsItem>
                        })
                    }
                </div>
                <h2>大哥们我也是有底线的</h2>
            </div>
        </div>
    }
    componentDidMount(){
       $http.post('/mall/index/getGoodsChannel',{channel_id:this.state.channel_id})
       .then(res => {
           this.setState({
               goodslist:JSON.parse(res).data.data
           })
        //    console.log(JSON.parse(res))
       })
    }
    scrolling(){
       if(!this.state.flag)return;
       if(this.state.channel_id>9)return;
       let {scroller,doc} = this.refs;
       let st = scroller.scrollTop;
       let sw = scroller.offsetHeight;
       let dh = doc.offsetHeight;
       if(dh-(st+sw)<50){
            this.setState({
                flag:false
            })
            console.log('满足条件')
            this.setState({
                channel_id:++this.state.channel_id
            })
            let {goodslist} = this.state;
            $http.post('/mall/index/getGoodsChannel',{channel_id:this.state.channel_id})
            .then(res => {
                this.setState({
                    goodslist:[...goodslist,...JSON.parse(res).data.data]
                })
                this.setState({
                    flag:true
                })
            })
       }
    }
}

export default Home;