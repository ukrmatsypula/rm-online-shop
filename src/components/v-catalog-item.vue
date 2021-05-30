<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('@/assets/images/' + product_data.image)"
      :alt="product_data.name"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">Price: {{ product_data.price }} UAH</p>
    <button class="v-catalog-item__add-to-cart btn" @click="addToCart">
      add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  components: {},
  props: {
    product_data: {
      type: Object,
      require: true,
    },
  },
  data: () => ({
    title: 'catalog-item',
  }),
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    },
  },
}
</script>

<style lang="scss" scoped>
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin: $margin * 2;

  &__image {
    width: 100px;
  }
}
</style>
