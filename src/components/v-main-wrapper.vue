<template>
  <div class="v-main-wrapper">
    <p>{{ title }}</p>
    <v-catalog />
    <v-cart
      :cart_data="CART"
      v-if="CART.length"
    />
  </div>
</template>

<script>
import vCatalog from '@/components/v-catalog.vue'
import VCart from '@/components/v-cart.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog,
    VCart,
  },
  data: () => ({
    title: 'v-main-wrapper',
  }),
  computed: {
    ...mapGetters(['CART']),
  },
}
</script>

<style lang="scss" scoped>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
