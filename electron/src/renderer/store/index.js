import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import holy from './modules/holy'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  actions,
  modules: {
    holy
  },
  strict: debug
})

export default store
