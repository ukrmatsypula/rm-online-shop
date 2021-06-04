<template>
  <div class="popup-wrapper" ref="popup-wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{ popupTitle }}</span>
        <i class="material-icons v-popup__close" @click="closePopup">
          close
        </i>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
      <div class="v-popup__footer">
        <button class="close-modal" @click="closePopup">Close</button>
        <button class="submit-btn" @click="rightBtnAction">
          {{ rightBtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',
  props: {
    rightBtnTitle: {
      type: String,
      default: 'Ok',
    },
    popupTitle: {
      type: String,
      default: 'Popup name',
    },
  },
  methods: {
    closePopup() {
      this.$emit('сlosePopup')
    },
    rightBtnAction() {
      this.$emit('rightBtnAction')
    },
  },
  mounted() {
    document.addEventListener('click', e => {
      if (e.target === this.$refs['popup-wrapper']) {
        this.closePopup()
      }
    })
  },
}
</script>

<style lang="scss">
.popup-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(60, 60, 60, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 111;
}
.v-popup {
  padding: $padding * 2;
  background: #fff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  position: fixed;
  top: 50px;
  right: 0;
  left: 0;
  z-index: 10;
  width: 500px;
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
    color: #fff;
    border: 0;
  }
  .close-modal {
    padding: $padding;
    color: #2d2d2d;
    background: red;
    color: #fff;
    border: 0;
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
