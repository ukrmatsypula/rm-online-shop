import Vue from 'vue'
import Vuex from 'vuex'
import getters from '@/vuex/getters/getters'
import mutations from '@/vuex/mutations/mutations'
import actions from '@/vuex/actions/actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters,
  mutations,
  actions,
})

export default store
