<template>
  <div class="v-cart">
    <p>{{ title }}</p>
    <v-cart-item />
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
}
</script>

<style lang="scss" scoped></style>
