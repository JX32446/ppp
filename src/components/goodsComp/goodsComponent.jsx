import React, {Component} from 'react'
import $http from '../../utils/http.js'
import Lazyload from 'react-lazyload'
import {getCookie} from '../../utils/utils.js'
import {ToastContainer,toast} from 'react-toastify'
import {connect} from 'react-redux'
import {ADD_CART} from './../../store/reducer.js'

class Placeholder extends Component{
    render(){
        return <img src={require('../../static/img/111.png')} alt=""/>
    }
}

class GoodsItem extends Component{ 
    constructor(){
        super()
        this.addCart = this.addCart.bind(this)
    }
    render(){
        let {data} = this.props;
        return <dl className='goods-item' onClick={()=>{this.onDetail(data.goods_id)}}>
           {/* <dt><img src={'http://www.lb717.com/' + data.obj_data} alt=""/></dt> */}
            <dt><Lazyload overflow once height={'100%'} placeholder={<Placeholder></Placeholder>} debounce={200}><img src={'http://www.lb717.com/' + data.obj_data} alt=""/></Lazyload></dt>
            <dd>
                <p className='goods-detail'>{data.goods_name}</p>
                <p>
                    <span className='goods-price'>{data.discount_price}</span>
                    <span className='iconfont icon-xiazai1' onClick={this.addCart}></span>
                </p>
                <ToastContainer></ToastContainer>
            </dd>
        </dl>
    }
    addCart(e){
        e.stopPropagation();
        let {data} = this.props;
        if(getCookie('token')){
            $http.post('/user/Cart/addCart',{
                goods_id:data.goods_id,
                goods_info:data, 
                token:getCookie('token')
            })
            .then((res) => {
                console.log(res);  
                if(res==1){
                    toast.success('购物车添加成功',{
                        position:toast.POSITION.TOP_CENTER
                    })
                    this.props.dispatch({
                        type:ADD_CART,
                        data:{
                            ...data,
                            count:1
                        }
                    })
                } else{
                    toast.warn(res.info,{
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:2000,
                        className:'test'
                    })
                    let {history,location} = this.props;
                    history.push('/login',{
                        from:location.pathname
                    })
                } 
            })
        }else{
            let {history,location} = this.props;
            history.push('/login',{
                from:location.pathname
            })
        }
       
        // console.log(document.cookie)
    }
    onDetail(goods_id){
        this.props.history.push('/detail?goods_id'+goods_id,{
            goods_id:goods_id
        })
    }
}

export default GoodsItem