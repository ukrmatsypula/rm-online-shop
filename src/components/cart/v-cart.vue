<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link-to-cart">Back to Catalog</div>
    </router-link>
    <h1>{{ title }}</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="cart__total">
      <p class="total__name">Total:</p>
      <p>{{ cartTotalCost }} UAH</p>
    </div>
  </div>
</template>

<script>
import vCartItem from '@/components/cart/v-cart-item'
import { mapActions } from 'vuex'

export default {
  name: 'v-cart',
  components: {
    vCartItem,
  },
  data: () => ({
    title: 'Cart',
  }),
  props: {
    cart_data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    cartTotalCost() {
      let result = []

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }

        result = result.reduce((acc, item) => {
          acc += item
          return acc
        }, 0)
        return result
      } else {
        return 0
      }
    },
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_CART_ITEM',
      'DECREMENT_CART_ITEM',
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },
  },
}
</script>

<style lang="scss" scoped></style>
