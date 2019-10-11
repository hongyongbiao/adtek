import {
    getHotProduct, 
    getProductList,
    getIndexNew,
    getNewList,
    getProductDetail,
    getNewDetail
} from '../api/index'

import {
    HOT_PRODUCT,
    PRODUCT_LIST,
    INDEX_NEW,
    NEW_LIST,
    PRODUCT_DETAIL,
    NEW_DETAIL
} from './mutation-type'

export default{
    //获取热销产品
    async reqHotProduct({commit}){
        const result= await getHotProduct()
        commit(HOT_PRODUCT,{hotproduct:result.message})
    },
    //获取产品列表
    async reqProductList({commit},params){
        const result = await getProductList(params)
        commit(PRODUCT_LIST,{productlist:result})
    },
    //获取首页新闻
    async reqIndexNew({commit}){
        const result=await getIndexNew()
        commit(INDEX_NEW,{indexnew:result.message})
    },
    //获取新闻列表
    async reqNewList({commit},params){
        const result=await getNewList(params)
        commit(NEW_LIST,{newlist:result})
    },
    //获取产品详情
    async reqProudctDetail({commit},params){
        const result=await getProductDetail(params)
        commit(PRODUCT_DETAIL,{productdetail:result.message})
    },
    //获取新闻内容
    async reqNewDetail({commit},params){
        const result=await getNewDetail(params)
        commit(NEW_DETAIL,{newdetail:result.message})
    }
}