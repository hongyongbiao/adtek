<template>
    <div>
        <baidu-map class="map">
        </baidu-map>
        <div class="contact-add">
            <span>Email: sales11@adtek-fiber.com</span>
            <span>Tel: 0086 755 83545255</span>
            <span>Fax: 0086 755 83545271</span>
            <span>Zip Code: 518000</span>
            <span>Skype: sales11.adtek</span>
            <span>Office Address: 10 Floor, JinQi Wisdom Valley, Nanshan, Shenzhen</span>
            <span>Factory Address: 5F, AnjuYuan No.28 Wangjingkeng ,Dakan Village, Nanshan, Shenzhen</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'AreaRight',
}
</script>

<style lang="stylus" scoped>
.map
  width: 100%;
  height: 300px;
.contact-add
  margin-top 15px
  span 
    color #666
    font-size 14px
    line-height 28px
    display block
  span:last-child
    margin-bottom 20px
</style>