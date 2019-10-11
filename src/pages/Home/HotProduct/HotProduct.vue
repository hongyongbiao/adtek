<template>
    <div class="hot-product">
        <div class="container">
            <div class="hot-product-title">
                <h4>Hot Product</h4>
            </div>
            <div class="hot-product-content" v-if="hotproduct.length>0">
                <ul>
                    <li class="product-inner col-xs-12 col-md-4" v-for="(item,index) in  hotproduct" :key="index">
                        <div class="product-box">
                           <img :src="item.img" alt="">
                           <div class="product-content">
                               <h4>{{item.title}}</h4>
                               <p>{{item.content}}</p>
                           </div>
                           <div class="product-butt">
                               <router-link :to="{name:'detail',query:{id:item.product_list_id}}"><button>Read More</button></router-link>
                           </div>
                           
                        </div>
                    </li>
                </ul>
                <div class="hot-product-butt col-xs-12 col-md-12">
                    <router-link to="/product"><button>Read More</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name:'HotProduct',
    computed:{
        ...mapState(['hotproduct'])
    },
    mounted(){
        this.$store.dispatch('reqHotProduct')
    }
}
</script>

<style lang="stylus" scoped>
.hot-product
 margin-bottom 50px
 .hot-product-title
  font-size 24px
  line-height 48px
  text-align center
  color #333333
  padding-bottom 10px
 .hot-product-content
  .product-inner
   margin-bottom 40px
   .product-box
    box-shadow 0 12px 30px rgba(0,0,0,.15)
    img 
     width 100%
    .product-content
     padding 5px 20px
     h4
      font-size 16px
      font-weight bolder
      color #333333
      line-height 32px
     p
      font-size 14px
      color #666666
      line-height 20px
      height 60px
      overflow hidden
    .product-butt
     display block
     text-align center
     button
      border none
      background-color #ffffff
      color #ff9191
      font-size 18px
      padding 20px 0 40px 0
     
 .hot-product-butt
  text-align center
  button
   border none
   padding 10px 20px
   background-color #ffffff
   border 1px solid #666666
   font-size 14px
   color #666666
</style>