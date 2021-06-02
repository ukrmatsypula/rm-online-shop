<template>
  <div class="v-select">
    <p class="title" @click="isOptionsVisible = !isOptionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="isOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-select',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isOptionsVisible: false,
  }),
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.isOptionsVisible = false
    },
    hideSelect() {
      this.isOptionsVisible = false
    },
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this))
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  },
}
</script>

<style lang="scss">
.title {
  border: 1px solid #aeaeae;
}
.v-select {
  position: relative;
  width: 200px;
  cursor: pointer;
}
.v-select p {
  margin: 0;
}
.options {
  border: 1px solid #aeaeae;
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 1;
  width: 100%;
}

.options p:hover {
  background: #e7e7e7;
}
</style>
