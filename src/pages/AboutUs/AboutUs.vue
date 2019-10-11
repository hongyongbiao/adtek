<template>
    <div class="about-us">
        <banner/>
        <content-area/>
    </div>
</template>

<script>
import Banner from './../Banner/Banner'
import ContentArea from './ContentArea/ContentArea'

export default {
    name:'AboutUs',
    components:{
        Banner,
        ContentArea
    }
}
</script>

<style lang="stylus" scoped>

</style>