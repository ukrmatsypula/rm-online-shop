<template>
  <div class="v-main-catalog">
    <h1>{{ title }}</h1>
    <v-catalog-item />
  </div>
</template>

<script>
import vCatalogItem from '@/components/v-catalog-item'
export default {
  name: 'v-main-catalog',
  components: {
    vCatalogItem,
  },
  data: () => ({
    title: 'Catalog',
  }),
}
</script>

<style lang="scss" scoped></style>
