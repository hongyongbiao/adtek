<template>
    <div class="content-area">
        <div class="container">
            <div class="content-area-top">
                <ol class="breadcrumb">
                   <li><a href="javascript:;">Home</a></li>
                   <li><a href="javascript:;">Product / Detail</a></li>
                </ol>
            </div>
            <div class="content-area-bott">
                <div class="area-sidebar hidden-xs col-md-3">
                     <area-sidebar/>              
                </div>
                <div class="area-right col-md-9">
                    <div class="product-detail-top">
                        <div class="col-md-6 col-xs-12 product-img">
                            <img :src="productdetail[0].detail_content_o" alt="" width="100%">
                        </div>
                        <div class="col-md-6 col-xs-12 product-title">
                            <h1>{{productdetail[0].title}}</h1>
                            <p>{{productdetail[0].title_content}}</p>
                        </div>
                        <div class="border-bott"></div>
                    </div>
                    <div class="product-detail-bottom">
                        <img :src="productdetail[0].detail_content_f" alt="" width="100%">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AreaSidebar from '../../AreaSidebar/AreaSidebar'
import { mapState } from 'vuex'

export default {
    name:'DetailContent',
    components:{
        AreaSidebar,
    },
    computed:{
        ...mapState(['productdetail'])
    },
    mounted(){
        //console.log(this.$route)
        this.$store.dispatch('reqProudctDetail',{id:this.$route.query.id})
    }
}
</script>

<style lang="stylus" scoped>
.content-area-top
 background-color #f7f7f7
 margin 20px 0
.content-area-bott
 .area-sidebar
  padding-left 0
 .area-right 
    .product-detail-top
        .product-img
            border 1px solid #f1f1f1
            margin-bottom 15px
        .product-title
            h1
              font-size 15px
              font-weight bolder
              line-height 30px
              color #333333
              margin 10px 0
            p 
              color #666
              font-size 14px
              line-height 24px
              font-weight lighten
        .border-bott
            border-bottom 1px dashed #dddddd
            clear both
            margin-bottom 15px
  

</style>