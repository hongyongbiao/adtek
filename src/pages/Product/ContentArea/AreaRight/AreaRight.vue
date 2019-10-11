<template>
  <div class="area-content">
      <ul>
          <li v-for="(item,index) in productlist.message" :key="index">
            <div class="product-pic col-md-4">
              <img :src="item.img" alt="">
            </div>
            <div class="product-content col-md-8">
               <h2>{{item.title}}</h2>
               <p>
                 {{item.content}}
               </p>
               <router-link :to="{name:'detail',query:{id:item.product_list_id}}"><button>Read More</button></router-link>
            </div>
            <div class="border-bott" style=""></div>         
          </li>         
      </ul>
      <div class="bott-butt">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li @click.prevent="watchLeft(page)">
              <a href="javascript:;" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li v-for="(value,i) in Math.ceil(productlist.count/count)" :key="i" @click.prevent="watchTo(i)"><a href="javascript:;">{{i+1}}</a></li>
            <li @click.prevent="watchRight(page)">
              <a href="javascript:;" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "AreaRight",
  data(){
    return{
      page:1,
      count:12,

    }
  },
  computed:{
    ...mapState(['productlist'])
  },
  mounted(){
    this.$store.dispatch('reqProductList',{page:this.page,count:this.count})
  },
 
  methods:{
    //分页
    watchTo(i){
      this.page=i+1
      //console.log(this.page)
      this.$store.dispatch('reqProductList',{page:this.page,count:this.count})
    },
    //向左翻页
    watchLeft(page){
     //console.log(page)
     if(page>0){
       this.page=page-1
       this.$store.dispatch('reqProductList',{page:this.page,count:this.count})
     }else{
       this.page=1
       this.$store.dispatch('reqProductList',{page:this.page,count:this.count})
     }
    },
    //向右翻页
    watchRight(page){
     //console.log(page)
     if(page < Math.ceil(this.productlist.count/this.count)){
       this.page=page+1
       this.$store.dispatch('reqProductList',{page:this.page,count:this.count})
     }else{
       this.page=Math.ceil(this.productlist.count/this.count)
       this.$store.dispatch('reqProductList',{page:this.page,count:this.count})
     }
    },
  },
};
</script>

<style lang="stylus" scoped>
.area-content
  li
   margin-bottom 10px
   position relative
   .product-pic
    img 
     width 90%
     padding-left 3%
   .product-content
    h2
     font-size 15px
     font-weight bolder 
     line-height 30px
     color #333333
    p
     color #8d9095
     font-size 13px
     line-height 18px
    button 
     margin-top 70px
     margin-bottom 20px
     border none
     padding 10px
     background-color #e60012
     color #ffffff
     font-size 13px
     border-radius 5px
   .border-bott
    border-bottom 1px solid #dddddd
    clear both
 .bott-butt
  text-align center
</style>