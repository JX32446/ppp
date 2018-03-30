import React,{Component} from 'react'
import Index from '../views/index/index.jsx'
import Home from '../views/home/home.jsx'
import Detail from '../views/detail/detail.jsx'
import Login from '../views/login/login.jsx'
// import NoMatch from '../views/route404/nomatch.jsx'
import Cart from '../views/cart/cart.jsx'
import Register from '../views/register/register.jsx'
import Mine from '../views/mine/mine.jsx'
import Catagory from '../views/catagory/catagory.jsx'
import Search from '../views/search/search.jsx'
import Result from '../views/result/result.jsx'
import Setting from '../views/setting/setting.jsx'
let router = {
    routes:[
        
        {
            path:'/detail',
            component:Detail,
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        }, 
        {
            path:'/setting',
            component:Setting
        },
        {
            path:'/index',
            component:Index,
            children:[
                {
                    path:'/index/home',
                    component:Home,
                },
                {
                    path:'/index/catagory',
                    component:Catagory,
                },
                {
                    path:'/index/cart',
                    component:Cart,
                    authorization:true
                },
                {
                    path:'/index/mine',
                    component:Mine,
                    authorization:true
                },
                {
                    path:'/index/search',
                    component:Search,
                },
                {
                    path:'/index/result',
                    component:Result,
                }
            ]
        },
        // {
        //     component:NoMatch
        // }
    ]
}

export default router