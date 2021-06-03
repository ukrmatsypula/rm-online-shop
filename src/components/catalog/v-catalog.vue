<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link-to-cart">Cart: {{ CART.length }}</div>
    </router-link>

    <h1>Catalog</h1>
    <div class="filters">
      <v-select
        :options="categories"
        :selected="selected"
        @select="sortByCategories"
        :isExpanded="IS_DESKTOP"
      />
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="10000"
          step="10"
          v-model.number="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          min="0"
          max="10000"
          step="10"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        />
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in this.filteredProducts"
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
    sortedProducts: [],
    minPrice: 0,
    maxPrice: 10000,
  }),
  computed: {
    ...mapGetters(['PRODUCTS', 'CART', 'IS_MOBILE', 'IS_DESKTOP']),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    },
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(product) {
      this.ADD_TO_CART(product)
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice
        this.maxPrice = this.minPrice
        this.minPrice = tmp
      }
      this.sortByCategories()
    },
    sortByCategories() {
      this.sortedProducts = [...this.PRODUCTS]
      this.sortedProducts = this.sortedProducts.filter(
        item => item.price >= this.minPrice && item.price <= this.maxPrice
      )
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(resonse => {
      if (resonse) {
        console.log('data arrived')
        this.sortByCategories()
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

  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .range-slider {
      width: 200px;
      margin: auto 16px;
      text-align: center;
      position: relative;
    }

    .range-slider svg,
    .range-slider input[type='range'] {
      position: absolute;
      left: 0;
      bottom: 0;
    }

    input[type='range']::-webkit-slider-thumb {
      z-index: 1;
      position: relative;
      top: 2px;
      margin-top: -7px;
    }
  }
}
</style>
