<template>
  <div class="v-popup">
    <div class="v-popup__header">
      <span>Popup name: </span>
      <i class="material-icons v-popup__close" @click="closePopup">
        close
      </i>
    </div>
    <div class="v-popup__content">
      <slot></slot>
    </div>
    <div class="v-popup__footer">
      <button class="close-modal" @click="closePopup">Close</button>
      <button class="submit-btn">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',
  methods: {
    closePopup() {
      this.$emit('сlosePopup')
    },
  },
}
</script>

<style lang="scss">
.v-popup {
  padding: $padding * 2;
  background: #fff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  position: fixed;
  top: 50px;
  right: 0;
  left: 0;
  width: 400px;
  margin: auto;

  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .submit-btn {
    padding: $padding;
    color: #2d2d2d;
    background: #26ae68;
  }
  .close-modal {
    padding: $padding;
    color: #2d2d2d;
    background: red;
  }

  &__close {
    cursor: pointer;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
