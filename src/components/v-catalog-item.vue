<template>
  <div class="v-catalog-item">
    <img src="" alt="img">
    <p>{{ title }}</p>
    <p>Price: 100</p>
    <button>add to cart</button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  components: {},
  data: () => ({
    title: 'catalog-item',
  }),
}
</script>

<style lang="scss" scoped>
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin: $margin * 2;
}
</style>
