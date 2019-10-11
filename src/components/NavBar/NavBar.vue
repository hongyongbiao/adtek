<template>
  <div class="adtek-navbar">
    <nav class="navbar navbar-default">
      <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand logo" href="#">
              <img src="./../imgs/logo.png" alt="">
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li :class="{active:$route.path.includes('/home')}" @click="witchTo('/home')">
              <a>
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li :class="{active:$route.path.includes('/about')}" @click="witchTo('/about')">
              <a>About Us</a>
            </li>
            <li :class="{active:$route.path.includes('/product')}" @click="witchTo('/product')">
              <a>Product</a>
            </li>
            <li :class="{active:$route.path.includes('/new')}" @click="witchTo('/new')">
              <a>New</a>
            </li>
            <li :class="{active:$route.path.includes('/solution')}" @click="witchTo('/solution')">
              <a>Solution</a>
            </li>
            <li :class="{active:$route.path.includes('/contact')}" @click="witchTo('/contact')" >
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods:{
    witchTo(path){
      this.$router.replace(path)
    }
  }
};
</script>

<style lang="stylus" scoped>
  .logo
   width 100px
   position relative
   margin-right 50px
   img 
    position absolute
    left 0
    top 0
    width 100%
</style>