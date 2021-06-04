<template>
  <div class="v-catalog-item">
    <v-popup
      :popupTitle="product_data.name"
      rightBtnTitle="Add to cart"
      v-if="isInfoPopupVisible"
      @сlosePopup="onClosePopup"
      @rightBtnAction="addToCart"
    >
      <img
        class="v-catalog-item__image"
        :src="require('@/assets/images/' + product_data.image)"
        :alt="product_data.name"
      />
      <div>
        <p class="v-catalog-item__name">{{ product_data.name }}</p>
        <p class="v-catalog-item__price">
          Price: {{ product_data.price | toFix | formattedPrice }}
        </p>
        <p class="v-catalog-item__category">{{ product_data.category }}</p>
      </div>
    </v-popup>

    <img
      class="v-catalog-item__image"
      :src="require('@/assets/images/' + product_data.image)"
      :alt="product_data.name"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">
      Price: {{ product_data.price | toFix | formattedPrice }}
    </p>
    <button class="v-catalog-item__show-info" @click="showPopupInfo">
      Show info
    </button>
    <button class="v-catalog-item__add-to-cart btn" @click="addToCart">
      add to cart
    </button>
  </div>
</template>

<script>
import vPopup from '@/components/popup/v-popup'
import toFix from '@/filters/toFix'
import formattedPrice from '@/filters/price-format'

export default {
  name: 'v-catalog-item',
  components: {
    vPopup,
  },
  props: {
    product_data: {
      type: Object,
      require: true,
    },
  },
  data: () => ({
    title: 'catalog-item',
    isInfoPopupVisible: false,
  }),
  filters: {
    toFix,
    formattedPrice,
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    },
    showPopupInfo() {
      this.isInfoPopupVisible = true
    },
    onClosePopup() {
      this.isInfoPopupVisible = false
    },
  },
  mounted() {
    this.$set(this.product_data, 'quantity', 1)
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
