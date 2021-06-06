<template>
  <div class="cart-item">
    <img
      class="cart-item__image"
      :src="require('@/assets/images/' + cart_item_data.image)"
      :alt="cart_item_data.name"
    />
    <div class="cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price | toFix | formattedPrice }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item__quantity">
      <p>Qty:</p>
      <span>
        <span class="cart-item__quantity-btn" @click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span class="cart-item__quantity-btn" @click="incrementItem">+</span>
      </span>
    </div>
    <button class="btn btn--red" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
import toFix from '@/filters/toFix'
import formattedPrice from '@/filters/price-format'

export default {
  name: 'v-cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default: () => ({}),
    },
  },
  filters: {
    toFix,
    formattedPrice,
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
    decrementItem() {
      this.$emit('decrement')
    },
    incrementItem() {
      this.$emit('increment')
    },
  },
}
</script>

<style lang="scss">
*,
*:after,
*:before {
  box-sizing: border-box;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin: $margin * 2;

  &__image {
    max-width: 50px;
  }
  &__quantity-btn {
    border-radius: 50%;
    border: 1px solid rgb(76, 77, 74);
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }
}

.cart {
  margin-bottom: 100px;

  &__total {
    display: flex;
    justify-content: center;
    background-color: #3ddd73;
    color: #fff;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    padding: $padding * 3;
    font-size: 20px;
  }
}
</style>
