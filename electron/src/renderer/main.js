// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import router from './routers/main.router'
import db from './database/nedbStore'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.prototype.$db = db
Vue.use(iView)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})
router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
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
