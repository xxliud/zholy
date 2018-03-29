import Vue from 'vue'
import Router from 'vue-router'
import HomeRouter from './home.router'
import HolyRouter from './holy.router'

Vue.use(Router)

export default new Router({
  routes: [
    HomeRouter,
    HolyRouter
  ]
})
