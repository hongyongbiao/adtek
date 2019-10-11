import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

import Home from './../pages/Home/Home'
import AboutUs from './../pages/AboutUs/AboutUs'
import Product from './../pages/Product/Product'
import Solution from './../pages/Solution/Solution'
import Contact from './../pages/Contact/Contact'
import New from './../pages/New/New'

import Detail from './../pages/Product/Detail/Detail'
import NewDetail from './../pages/New/NewDetail/NewDetail'

export default new vueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:AboutUs
        },
        {
            path:'/product',
            component:Product

        },
        {
            path:'/new',
            component:New
        },
        {
            path:'/solution',
            component:Solution
        },
        {
            path:'/contact',
            component:Contact
        },
        {
            path:'/product/detail',
            name:'detail',
            component:Detail

        },
        {
            path:'/new/detail',
            name:'newdetail',
            component:NewDetail

        },
        {
            path:'/',
            redirect:'/home'
        }

    ]
})