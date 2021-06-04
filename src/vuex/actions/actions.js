import axios from 'axios'
export default {
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
  INCREMENT_CART_ITEM({ commit }, index) {
    commit('INCREMENT', index)
  },
  DECREMENT_CART_ITEM({ commit }, index) {
    commit('DECREMENT', index)
  },
  SET_MOBILE({ commit }) {
    commit('SWITCH_MOBILE')
  },
  SET_DESKTOP({ commit }) {
    commit('SWITCH_DESKTOP')
  },
  SET_SEARCH_VALUE_TO_VUEX({ commit }, value) {
    commit('SET_SEARCH_VALUE_TO_STATE', value)
  },
}
