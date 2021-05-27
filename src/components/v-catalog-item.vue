<template>
  <div class="v-catalog-item">
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

<style lang="scss" scoped></style>
