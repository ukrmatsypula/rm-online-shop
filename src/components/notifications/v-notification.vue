<template>
  <div class="v-notification">
    <transition-group name="v-transition-animate" class="messages-list">
      <div
        class="v-notification__content"
        v-for="message in messages"
        :key="message.id"
        :class="message.icon"
      >
        <div class="content__text">
          <span>{{ message.name }}</span>
          <i class="material-icons">{{ message.icon }}</i>
        </div>
        <div class="content__buttons">
          <button v-if="rightButton">{{ rightButton }}</button>
          <button v-if="leftButton">{{ leftButton }}</button>
        </div>
      </div>
    </transition-group>
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
    timeout: {
      type: Number,
      default: 3000,
    },
  },
  methods: {
    hideNotification() {
      if (this.messages.length) {
        setTimeout(() => {
          this.messages.splice(this.messages.length - 1, 1)
        }, this.timeout)
      }
    },
  },
  watch: {
    messages() {
      this.hideNotification()
    },
  },
  mounted() {
    this.hideNotification()
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

    &.error {
      background: red;
      color: #fff;
    }
    &.warning {
      background: orange;
      color: #fff;
    }
    &.check-circle {
      background: green;
      color: #fff;
    }
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

  .v-transition-animate {
    &-enter {
      transform: translateX(120px);
      opacity: 0;
    }

    &-enter-active {
      transition: all 0.6s ease;
    }

    &-enter-to {
      opacity: 1;
    }

    &-leave {
      height: 50px;
      opacity: 1;
    }
    &-leave-active {
      transition: transform 0.6s ease, opacity 0.6s, height 0.6s 0.2s;
    }
    &-leave-to {
      height: 0;
      transform: translateX(120px);
      opacity: 0;
    }

    &-move {
      transition: transform 0.6s ease;
    }
  }
}
</style>
