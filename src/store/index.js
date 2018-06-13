import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import { request } from './request/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    request,
    auth
  }
})

export default store
