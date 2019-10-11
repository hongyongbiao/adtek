<template>
    <div>
        <banner/>
        <new-content/>
    </div>
</template>

<script>
import Banner from './../../Banner/Banner'
import NewContent from './NewContent'

export default {
    name:'NewDetail',
    components:{
        Banner,
        NewContent
    }
}
</script>

<style lang="stylus" scoped>

</style>