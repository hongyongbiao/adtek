<template>
    <div class="content-area">
        <div class="container">
            <div class="content-area-top">
                <ol class="breadcrumb">
                   <li><a href="javascript:;">Home</a></li>
                   <li><a href="javascript:;">New / Detail</a></li>
                </ol>
            </div>
            <div class="content-area-bott">
                <div class="area-sidebar hidden-xs col-md-3">
                     <area-sidebar/>              
                </div>
                <div class="area-right col-md-9" v-for="(item,index) in newdetail" :key="index">
                    <div class="new-title">
                        <h1>{{item.new_title}}</h1>
                        <span>{{item.new_time}}</span>
                    </div>
                    <div class="new-content">
                        <img :src="item.new_img_o" alt="" width="100%">
                        <p>
                            {{item.detail_content}}
                        </p>
                    </div>
                    <div class="area-butt">
                        <span class="left-butt" @click="previousTo(item.new_id-1)"><router-link :to="{name:'newdetail',query:{id:item.new_id-1,count:count}}">Previous</router-link></span>
                        <span class="right-butt" @click="nextTo(item.new_id+1)"><router-link :to="{name:'newdetail',query:{id:item.new_id+1,count:count}}">Next</router-link></span>
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
    data(){
        return{
            count:this.$route.query.count
        }
    },
    components:{
        AreaSidebar,
    },
    computed:{
        ...mapState(['newdetail'])
    },
    mounted(){
        this.$store.dispatch('reqNewDetail',{id:this.$route.query.id})
        //console.log(this.$route.query.count) 
        console.log(this.count)
    },
    methods:{
        previousTo(pageid){
            if(pageid <= 1){
                pageid=1
            }else{
                this.$store.dispatch('reqNewDetail',{id:pageid})
                //console.log(pageid)
            }
            
        },
        nextTo(pageid){
            if(pageid < this.count){
                this.$store.dispatch('reqNewDetail',{id:pageid})
                //console.log(pageid)
            }else{
                pageid=this.count
            }
            
        }
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
     margin-bottom 70px
     .new-title
        h1
          font-size 15px
          font-weight bolder
          color #333
          line-height 30px 
          text-align center
          margin-bottom 20px
        span 
          color #666
          font-size 12px
          font-weight lighten
          line-height 24px
          text-align center
          display block
          margin 20px auto
          padding 10px 0
          border-bottom 1px solid #999
          width 160px
     .new-content
        img 
          margin-bottom 5px
        p
          color #999
          font-size 14px
          line-height 28px
          font-weight lighten
          text-indent 35px
     .area-butt
        font-size 14px
        font-weight bolder
        position relative
        margin-top 20px
        .left-butt
           position absolute
           left 0
           padding 10px
           border 1px solid #999
        .right-butt
           position absolute
           right 0 
           padding 10px 26px
           border 1px solid #999      

</style>