import {
    HOT_PRODUCT,
    PRODUCT_LIST,
    INDEX_NEW,
    NEW_LIST,
    PRODUCT_DETAIL,
    NEW_DETAIL
} from './mutation-type'

export default{
   //热销产品
   [HOT_PRODUCT](state,{hotproduct}){
       state.hotproduct=hotproduct
   },
   //产品列表
   [PRODUCT_LIST](state,{productlist}){
       state.productlist=productlist
   },
   //获取首页新闻
   [INDEX_NEW](state,{indexnew}){
       state.indexnew=indexnew
   },
   //获取新闻列表
   [NEW_LIST](state,{newlist}){
       state.newlist=newlist
   },
   //获取产品详情
   [PRODUCT_DETAIL](state,{productdetail}){
       state.productdetail=productdetail
   },
   //获取新闻内容
   [NEW_DETAIL](state,{newdetail}){
       state.newdetail=newdetail
   }

}