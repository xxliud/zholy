// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './routers/main.router'
import db from './database/nedbStore'
import axios from 'axios'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

Vue.use(Vant)
Vue.prototype.$axios = axios
Vue.prototype.$db = db
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from, next) => {
})

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
