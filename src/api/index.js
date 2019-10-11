import ajax from '../api/ajax'

//const BASE_URL='http://localhost:3000'

const BASE_URL='/api'
//获取热销产品
export const getHotProduct=()=>ajax(BASE_URL + '/product/hot')
//获取产品列表
export const getProductList=(params)=>ajax(BASE_URL+'/product/list',params)
//获取首页新闻
export const getIndexNew=()=>ajax(BASE_URL+'/new/indexnew')
//获取新闻列表
export const getNewList=(params)=>ajax(BASE_URL+'/new/newlist',params)
//获取产品详情
export const getProductDetail=(params)=>ajax(BASE_URL+'/product/detail',params)
//获取新闻内容
export const getNewDetail=(params)=>ajax(BASE_URL+'/new/detail',params)
