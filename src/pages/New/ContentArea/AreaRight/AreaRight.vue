<template>
    <div class="area-content">
        <div class="area-content-text">
            <ul>
                <li v-for="(item,index) in newlist.message" :key="index">
                    <router-link :to="{name:'newdetail',query:{id:item.new_id,count:newlist.count}}"><a href="javascrip:;" class="new-title col-xs-8 col-md-10">{{item.new_title}}</a></router-link><span class="new-time col-xs-4 col-md-2">{{item.new_time}}</span>
                    <div class="border-bott"></div>
                </li>

            </ul>
        </div>
        <div class="bott-butt">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li @click.prevent="watchLeft(page)">
              <a href="javascript:;" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li v-for="(item,index) in Math.ceil(newlist.count/count)" :key="index" @click.prevent="watchTo(index)"><a href="javascript:;">{{index+1}}</a></li>
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
    name:'AreaRight',
    data(){
        return{
            page:1,
            count:15,
        }
    },
    computed:{
        ...mapState(['newlist'])
    },
    mounted(){
        this.$store.dispatch('reqNewList',{page:this.page,count:this.count})
    },
    methods:{
        watchTo(index){
            this.page=index+1
            this.$store.dispatch('reqNewList',{page:this.page,count:this.count})
        },
        watchLeft(page){
            if(page>0){
              this.page=page-1
              this.$store.dispatch('reqNewList',{page:this.page,count:this.count})
            }else{
              this.page=1
              this.$store.dispatch('reqNewList',{page:this.page,count:this.count})
            }
        },
        watchRight(page){
         //console.log(page)
         if(page < Math.ceil(this.newlist.count/this.count)){
           this.page=page+1
           this.$store.dispatch('reqNewList',{page:this.page,count:this.count})
         }else{
           this.page=Math.ceil(this.newlist.count/this.count)
           this.$store.dispatch('reqNewList',{page:this.page,count:this.count})
         }
        }
    }
}
</script>

<style lang="stylus" scoped>
.area-content
 color #8d9095
 .area-content-text
  font-size 15px
  line-height 40px
  margin-bottom 20px
  .border-bott
   border-bottom 1px dashed #dddddd
   clear both
  .new-title
   overflow hidden
   text-overflow ellipsis
   white-space nowrap
  .new-time
   overflow hidden 
   text-overflow ellipsis
   white-space nowrap 

</style>