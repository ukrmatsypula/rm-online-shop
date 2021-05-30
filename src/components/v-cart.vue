<template>
  <div class="v-cart">
    <p>{{ title }}</p>
    <v-cart-item
      v-for="item in cart_data"
      :key="item.article"
      :cart_item_data="item"
    />
  </div>
</template>

<script>
import vCartItem from '@/components/v-cart-item'

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
}
</script>

<style lang="scss" scoped></style>
