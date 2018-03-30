import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import router from './router/router.config.js'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import RouterWrapper from './components/routeWrapper.jsx'
import {Provider} from 'react-redux'
import store from './store/store.js'
import './static/css/reset.css'
import './static/font/iconfont.css'
import './static/fonts/iconfont.css'
import './utils/fontset.js'
import './static/css/common.css'
import './views/index/index.css'
import './static/css/goodsComponent.css'
import './static/fontss/iconfont.css'


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Redirect exact from='/' to='/index/home'></Redirect>
                <RouterWrapper routes={router.routes}></RouterWrapper>
            </Switch>
        </BrowserRouter>
    </Provider>
    ,document.querySelector('#root')) 
 