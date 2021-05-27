<template>
  <div class="v-main-wrapper">
    <p>{{ title }}</p>
    <v-catalog />
    <v-cart />
  </div>
</template>

<script>
import vCatalog from '@/components/v-catalog.vue'
import VCart from '@/components/v-cart.vue'
export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog,
    VCart,
  },
  data: () => ({
    title: 'v-main-wrapper',
  }),
}
</script>

<style lang="scss" scoped>
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
}
</style>
