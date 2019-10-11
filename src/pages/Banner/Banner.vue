<template>
    <div class="banner">
        <div class="container-fluid">
            <div class="about-banner">
                <img src="./../../../static/imgs/data_center.jpg" alt="" width="100%">
                <div class="about-banner-content col-md-12 hidden-xs">
                    <h4>Data Center Solution</h4>
                    <p>As the world's leading design & innovative communications company, ADTEK has accumulated 10 years of experience and results in the field of optical communications.</p>
                </div>
            </div>
        </div>       
    </div>
</template>

<script>
export default {
    name:'Banner'
}
</script>

<style lang="stylus" scoped>
.banner
 margin-top -20px
 .container-fluid
  padding 0 0
  .about-banner
   position relative
   text-align center
   .about-banner-content
    position absolute
    top 30%
    color #ffffff
    h4
     font-size 45px
     font-weight bolder
     line-height 90px
    p
     font-size 14px
     line-height 28px
</style>