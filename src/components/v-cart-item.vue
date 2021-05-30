<template>
  <div class="cart-item">
    <img
      class="cart-item__image"
      :src="require('@/assets/images/' + cart_item_data.image)"
      :alt="cart_item_data.name"
    />
    <div class="cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="cart-item__quantity">
      Quantity: {{ cart_item_data.quantity }}
    </div>
    <button @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props: {
    cart_item_data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  },
}
</script>

<style lang="scss" scoped>
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
}
</style>
