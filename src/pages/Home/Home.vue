<template>
  <div>
    <div class="home container-luid">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./imgs/banner1.jpg" alt="" width="100%"></div>
          <div class="swiper-slide"><img src="./imgs/banner2.jpg" alt="" width="100%"></div>
          <div class="swiper-slide"><img src="./imgs/banner3.jpg" alt="" width="100%"></div>
          <div class="swiper-slide"><img src="./imgs/banner4.jpg" alt="" width="100%"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div class="container about-us">
      <div class="about-title">
        <h4>About Us</h4>
      </div>
      <div class="about-content">
        <p>
          Shenzhen Adtek Technology Co., Ltd. is one of the professional manufacturer which specialize in developing, producing and selling fiber optic patch cords & cables and other fiber communications products.With a R&D team consisted by 15 professional engineers, we focus on quality, R&D and innovation. Not only meeting customers EDM / OEM demand, we can also constantly pushing new products according to the customers and marketing needs.Based on the value of "Initiative, Hard work, Efficient, Innovative, Grateful and Sharing", Adtek Technology Co., Ltd. is always attracting talents and customers to cooperate closely together and make a win-win future!
        </p>
      </div>
    </div>
    <hot-product/>
    <new/>
  </div>
</template>

<script>

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

import HotProduct from './HotProduct/HotProduct'
import New from './New/New'

export default {
  name: "Home",
  components:{
    HotProduct,
    New
  },
  mounted(){
    new Swiper ('.swiper-container', {
        autoplay: {
          disableOnInteraction: false,
        },
        loop: true, // 循环模式选项
    
         // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })        
  }
};
</script>
 
<style lang="stylus" scoped>
.home
 margin-top -20px
.about-us
 margin-bottom 50px
 .about-title
  font-size 24px
  line-height 48px
  margin-top 50px
  text-align center
  color #333333
  padding-bottom 10px
 .about-content
  font-size 14px
  line-height 20px
  text-align center
  color #666666
  width 90%
  margin 0 auto
</style>