// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routers from './router/routers'
import VueRouter from 'vue-router'
/* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import Share from 'vue-social-share'
import 'vue-social-share/dist/client.css'
import Mui from 'vue-awesome-mui'
import VueQriously from 'vue-qriously'
import VueLazyload from 'vue-lazyload'


Vue.use(VueQriously)
Vue.use(Mui)
Vue.use(Share)
Vue.use(VueRouter)
Vue.use(YDUI)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: './static/image/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'hash',
  routes: routers,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

const that = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export default that
