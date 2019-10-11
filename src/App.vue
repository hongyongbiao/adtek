<template>
    <div>
        <nav-bar/>
        <router-view></router-view>
        <adtek-footer/>
        <div class="back-top">
            <a href="#top"><div class="glyphicon glyphicon-circle-arrow-up"></div></a>
        </div>
    </div>
</template>

<script>

import NavBar from './components/NavBar/NavBar'
import AdtekFooter from './components/AdtekFooter/AdtekFooter'

export default {
    name:'App',
    components:{
        NavBar,
        AdtekFooter
    }
}
</script>

<style lang="stylus" scoped> 
.back-top
  width 30px
  height 30px
  border-radius 50px
  background-color #f1f1f1
  position fixed
  bottom 20px 
  right 20px
  z-index 999
  text-align center
  font-size 12px
  line-height 30px
  opacity 0.5

</style>