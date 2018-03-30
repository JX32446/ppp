import React,{Component} from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
console.log(Swiper);
import Img1 from '../../static/img/img_01.png'
import Img2 from '../../static/img/img_02.png'
import Img4 from '../../static/img/img_04.png'
import Img5 from '../../static/img/img_05.png'

class SwiperComponent extends Component{
    render(){
        return <div className="swiper-container" ref='scDom'>
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={Img1} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={Img2} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={Img4} alt=""/>
                </div>
                <div className="swiper-slide">
                    <img src={Img5} alt=""/>
                </div>
            </div>
        </div>
    }
    componentDidMount(){
        new Swiper(this.refs.scDom,{
            autoplay:true,
            loop:true
        })
    }
}

export default SwiperComponent