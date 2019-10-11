<template>
    <div class="content-area">
        <div class="container">
            <div class="content-area-top">
                <ol class="breadcrumb">
                   <li><a href="javascript:;">Home</a></li>
                   <li><a href="javascript:;">Contact</a></li>
                </ol>
            </div>
            <div class="content-area-bott">
                <div class="area-sidebar hidden-xs col-md-3">
                     <area-sidebar/>              
                </div>
                <div class="area-right col-md-9">
                    <area-right/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AreaSidebar from '../../AreaSidebar/AreaSidebar'
import AreaRight from './AreaRight/AreaRight'

export default {
    name:'ContentArea',
    components:{
        AreaSidebar,
        AreaRight
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

</style>