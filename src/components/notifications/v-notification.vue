<template>
  <div class="v-notification">
    <div
      class="v-notification__content"
      v-for="message in messages"
      :key="message.id"
    >
      <div class="content__text">
        <span>{{ message.name }}</span>
        <i class="material-icons">check_circle</i>
      </div>
      <div class="content__buttons">
        <button v-if="rightButton">{{ rightButton }}</button>
        <button v-if="leftButton">{{ leftButton }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-notification',
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    rightButton: {
      type: String,
      default: '',
    },
    leftButton: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss">
.v-notification {
  position: fixed;
  top: 170px;
  right: 7px;
  z-index: 10;
  color: #fff;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: $padding * 4;
    border-radius: 4px;
    background: $green-bg;
    color: #fff;
    margin-bottom: 10px;
  }

  .content {
    &__text {
      display: flex;
      align-items: center;

      > i {
        margin-left: 20px;
      }
    }
  }
}
</style>
