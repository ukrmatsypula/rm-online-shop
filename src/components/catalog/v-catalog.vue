<template>
  <div class="v-catalog">
    <v-notification :messages="messages" />

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
        <p>Min: {{ minPrice | formattedPrice }}</p>
        <p>Max: {{ maxPrice | formattedPrice }}</p>
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
import formattedPrice from '@/filters/price-format'
import vNotification from '@/components/notifications/v-notification'

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem,
    vSelect,
    vNotification,
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
    messages: [],
  }),
  filters: {
    formattedPrice,
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'IS_MOBILE',
      'IS_DESKTOP',
      'SEARCH_VALUE',
    ]),
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
      this.ADD_TO_CART(product).then(() => {
        let timeStamp = Date.now().toLocaleString()
        this.messages.unshift({
          name: 'Товар добавлен в корзину',
          id: timeStamp,
        })
      })
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice
        this.maxPrice = this.minPrice
        this.minPrice = tmp
      }
      this.sortByCategories()
    },
    sortByCategories(category) {
      this.sortedProducts = [...this.PRODUCTS]
      this.sortedProducts = this.sortedProducts.filter(
        item => item.price >= this.minPrice && item.price <= this.maxPrice
      )

      if (category) {
        this.selected = category.name
        this.sortedProducts = this.sortedProducts.filter(
          item => item.category === category.name
        )
      }
    },
    sortProductsBySearchValue(value) {
      this.sortedProducts = [...this.PRODUCTS]
      if (value) {
        this.sortedProducts = this.sortedProducts.filter(item =>
          item.name.toLowerCase().includes(value.toLowerCase())
        )
      } else {
        this.sortedProducts = this.PRODUCTS
      }
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.sortProductsBySearchValue(this.SEARCH_VALUE)
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(resonse => {
      if (resonse) {
        console.log('data arrived')
        this.sortByCategories()
        this.sortProductsBySearchValue()
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
    top: 85px;
    right: 10px;
    z-index: 1;
    border: 1px solid #aeaeae;
  }

  .range-slider input[type='range'] {
    position: absolute;
    left: 65%;
    top: 180px;
  }
  ::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
  }
  input[type='range'] {
    -webkit-appearance: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 300px;
    height: 5px;
    background: #ddd;
    border: none;
    border-radius: 3px;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1.5px solid #c1c1c1;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ededed;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    box-shadow: 1px 1px 1px #c6c6c6, 0px 0px 1px #787878;
    border-radius: 2px;
    border: 0.2px solid #787878;
  }
}
</style>
