<template>
  <div>
    <h2>product-page</h2>
    {{ product.image }}
    <img
      class="v-catalog-item__image"
      v-if="product.image"
      :src="require('@/assets/images/' + product.image)"
      :alt="product.name"
    />
    <h4>product name: {{ product.name }}</h4>
    <p>Article: {{ product.article }}</p>
    <p>Price: {{ product.price | toFix | priceFormat }}</p>
    <button class="v-catalog-item__add-to-cart btn" @click="addToCart">
      add to cart
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import toFix from '@/filters/toFix'
import priceFormat from '@/filters/price-format'

export default {
  name: 'v-product-page',
  filters: {
    toFix,
    priceFormat,
  },
  computed: {
    ...mapGetters(['PRODUCTS']),
    product() {
      let result = {}
      this.PRODUCTS.map(item => {
        if (item.article === this.$route.query.product) {
          result = item
        }
      })
      return result
    },
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart() {
      this.ADD_TO_CART(this.product)
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  },
}
</script>

<style lang="scss"></style>
