<template>
    <div class="list-group">
        <a href="javascript:;" class="list-group-item active">
          Products Categories
        </a>
        <a href="javascript:;" class="list-group-item"><router-link to="/product">Fiber Products</router-link></a>
        <a href="javascript:;" class="list-group-item"><router-link to="/product">Fiber Patch Panel</router-link></a>
        <a href="javascript:;" class="list-group-item"><router-link to="/product">MPO/MTP Patch Cord</router-link></a>
        <a href="javascript:;" class="list-group-item"><router-link to="/product">Fiber Pigtails</router-link></a>
        <a href="javascript:;" class="list-group-item active">
          Copper Products
        </a>
        <a href="javascript:;" class="list-group-item"><router-link to="/product">Lan Cable</router-link></a>
        <a href="javascript:;" class="list-group-item"><router-link to="/product">Copper Patch Panel</router-link></a>
        <a href="javascript:;" class="list-group-item"><router-link to="/product">Keystone Jack</router-link></a>
        <a href="javascript:;" class="list-group-item"><router-link to="/product">Inline Coupler</router-link></a>
     </div> 
</template>

<script>
export default {
    name:'AreaSidebar'
}
</script>

<style lang="stylus" scoped>

</style>