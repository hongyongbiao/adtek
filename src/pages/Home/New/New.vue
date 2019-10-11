<template>
    <div class="home-new">
        <div class="container">
            <div class="new-title">
                <h4>New</h4>
            </div>
            <div class="swiper-container" v-if="indexnew.length>0">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in indexnew" :key="index">
                        <div class="new-scroll"> 
                            <ul> 
                                <li class="col-md-4 col-xs-12">
                                    <img :src="item.new_img_o" alt="">
                                </li>
                                <li  class="col-md-8 col-xs-12">
                                    <router-link :to="{name:'newdetail',query:{id:item.new_id}}"><h1>{{item.new_title}}</h1></router-link>
                                    <p>{{item.detail_content}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                    <!-- 如果需要分页器 -->
                    <div>
                        <div class="swiper-pagination"></div>
                    </div>
                
                <!-- 如果需要导航按钮 -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

import { mapState } from 'vuex'

export default {
    name:'New',
    computed:{
        ...mapState(['indexnew'])
    },
    mounted(){
        
      this.$store.dispatch('reqIndexNew')
    },
    watch:{
        indexnew(){
            this.$nextTick(()=>{
                new Swiper ('.swiper-container', {
                       autoplay: {
                          disableOnInteraction: false,
                       },
                       loop: true, // 循环模式选项
                       pagination: {
                       el: '.swiper-pagination',
                       },
                       // 如果需要前进后退按钮
                       navigation: {
                         nextEl: '.swiper-button-next',
                         prevEl: '.swiper-button-prev',
                       }
                     })
            })
        }
    }   
}
</script>

<style lang="stylus" scoped>
.home-new
 background-color #f4f4f4
 padding 50px 0
 .new-title
  font-size 24px
  line-height 48px
  text-align center
  color #333333
  padding-bottom 10px
 .swiper-container
  .swiper-wrapper
   .swiper-slide
    .new-scroll
     ul
      li
       background-color #ffffff
       padding 20px 50px
       height 210px
       img
        width 100%
        height 180px
        display table-cell
        vertical-align middle
       h1
        font-size 14px
        line-height 30px
        color #333333
       p
        font-size 12px
        line-height 20px
        height 140px
        overflow hidden
        color #666666
</style>