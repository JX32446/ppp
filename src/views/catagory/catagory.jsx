import React,{Component} from 'react'
import './catagory.css'
import $http from '../../utils/http.js'

class Catagory extends Component{
    constructor(){
        super()
        this.state={
            activeIndex:0
        }
    }
    render(){
        let catList=['家乡味道','进口食品','牛奶乳品','修仙零食','生鲜果蔬','米面粮油','调味调料','酒水饮料']
        return <div id="catagory">
            <header><input type="text" placeholder='输入您要购买的商品'/></header>
            <div className="catagory-wrap ks-clear">
                <div className="left-side">
                    <ul>
                        {
                            catList.map((item,index) => {
                                return <li key={index} className={this.state.activeIndex == index ?'catagory-active' : ''} onClick={()=>{this.toggleActive(index)}}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="right-side">
                    
                </div>
            </div>
        </div>
    }
    toggleActive(idx){
        // $http.get('/mobile/Category/categorySon',{sonid:idx+1}).then((res) => {
        //     console.log(res);         
        // })
        let url = 'https://acs.m.taobao.com/h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/?appKey=12574478&t=1521818940359&sign=d8435c2d0f59247da163a3ba26d5cbbb&api=mtop.relationrecommend.WirelessRecommend.recommend&v=2.0&type=jsonp&dataType=jsonp&callback=mtopjsonp4&data=%7B%22appId%22%3A%223113%22%2C%22vm%22%3A%22nw%22%2C%22params%22%3A%22%7B%5C%22industry%5C%22%3A%5C%222%5C%22%2C%5C%22catmap_version%5C%22%3A%5C%222.0%5C%22%7D%22%2C%22nxtype%22%3A%22h5%22%7D'
        let url_men = 'https://acs.m.taobao.com/h5/mtop.relationrecommend.wirelessrecommend.recommend/2.0/?appKey=12574478&t=1521818834785&sign=fe1fca65c1a9e4d14e73b4194492fdf1&api=mtop.relationrecommend.WirelessRecommend.recommend&v=2.0&type=jsonp&dataType=jsonp&callback=mtopjsonp3&data=%7B%22appId%22%3A%223113%22%2C%22vm%22%3A%22nw%22%2C%22params%22%3A%22%7B%5C%22industry%5C%22%3A%5C%223%5C%22%2C%5C%22catmap_version%5C%22%3A%5C%222.0%5C%22%7D%22%2C%22nxtype%22%3A%22h5%22%7D'
        $http.jsonp(url,'mtopjsonp4')
        .then(res=>{
            console.log(res);
            
        })
        $http.jsonp(url_men,'mtopjsonp3')
        .then(res=>{
            console.log(res);
        })
        $http.jsonp('http://apis.map.qq.com/ws/geocoder/v1/?location=33,100&key=7SFBZ-SLNRP-UTZDY-VMH2X-NQG5T-D3FRF&output=jsonp&callback=findLocation','findLocation')
        .then(res=>{
            console.log(res);
            
        })
        this.setState({
            activeIndex:idx
        })
    }
}

export default Catagory