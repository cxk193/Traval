import Vue from 'vue'
import App from './App.vue'

//在全局中引入使用
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.js'

Vue.use(Swiper)

import router from './router'
import store from './store'



import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/public.css'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
