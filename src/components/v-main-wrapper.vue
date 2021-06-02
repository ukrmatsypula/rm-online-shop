<template>
  <div class="v-main-wrapper">
    <v-select :options="options" :selected="selected" @select="optionSelect" />
    <p>Selected option goes here: {{this.selected}}</p>
    <p>{{ title }}</p>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import vSelect from '@/components/v-select'
export default {
  components: { vSelect },
  name: 'v-main-wrapper',
  data: () => ({
    title: 'v-main-wrapper',
    options: [
      { name: 'Option 1', value: 1 },
      { name: 'Option 2', value: 2 },
      { name: 'Option 3', value: 3 },
      { name: 'Option 4', value: 4 },
      { name: 'Option 5', value: 5 },
    ],
    selected: 'Select',
  }),
  methods: {
    optionSelect(option) {
      this.selected = option.name
    },
  },
}
</script>

<style lang="scss" scoped>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
