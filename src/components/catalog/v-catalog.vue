<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link-to-cart">Cart: {{ CART.length }}</div>
    </router-link>

    <h1>Catalog</h1>
    <v-select
      :options="categories"
      :selected="selected"
      @select="sortByCategories"
    />
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vCatalogItem from '@/components/catalog/v-catalog-item'
import vSelect from '@/components/v-select'

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem,
    vSelect,
  },
  data: () => ({
    categories: [
      {
        name: 'Все',
        value: 'All',
      },
      {
        name: 'Мужские',
        value: 'м',
      },
      {
        name: 'Женские',
        value: 'ж',
      },
    ],
    selected: 'Все',
  }),
  computed: {
    ...mapGetters(['PRODUCTS', 'CART']),
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(product) {
      this.ADD_TO_CART(product)
    },
    sortByCategories(category) {
      this.selected = category.name
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(resonse => {
      if (resonse) {
        console.log('data arrived')
      }
    })
  },
}
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link-to-cart {
    padding: $padding * 2;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    border: 1px solid #aeaeae;
  }
}
</style>
