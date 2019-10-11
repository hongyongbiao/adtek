<template>
    <div>
       <banner/>
       <detail-content/>
    </div>
</template>

<script>

import Banner from './../../Banner/Banner'
import DetailContent from './DetailContent'

export default {
    name:'Detail',
    components:{
        Banner,
        DetailContent
    },
   
}
</script>

<style lang="stylus" scoped>

</style>