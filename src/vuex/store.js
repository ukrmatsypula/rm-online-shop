import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE(state, products) {
      state.products = products
    },
    SET_CART(state, product) {
      state.cart.push(product)
    },
    REMOVE_FROM_CART(state, index) {
      return state.cart.splice(index, 1)
    },
  },
  actions: {
    async GET_PRODUCTS_FROM_API({ commit }, payload) {
      return await axios('http://localhost:3000/products', {
        method: 'GET',
      })
        .then(products => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch(err => {
          console.log(err)
          return err
        })
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
  },
})

export default store
