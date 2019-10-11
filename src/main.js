import Vue from 'vue'
import App from './App'

import store from './store'

import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: '4Bgw0BEV7jlpuiC5cafwpi98XusLyxsc'    //密钥
  })


import router from './router/index'

new Vue({
    el:'#app',
    router,
    store,
    render:h=>h(App)
})