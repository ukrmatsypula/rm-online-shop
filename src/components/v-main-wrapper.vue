<template>
  <div class="v-main-wrapper">
    <v-header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import vHeader from './layouts/v-header.vue'
export default {
  name: 'v-main-wrapper',
  components: { vHeader },
  data: () => ({}),
}
</script>

<style lang="scss">
.v-main-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
