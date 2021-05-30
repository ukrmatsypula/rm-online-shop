<template>
  <div class="v-main-wrapper">
    <p>{{ title }}</p>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'v-main-wrapper',
  data: () => ({
    title: 'v-main-wrapper',
  }),
  computed: {},
}
</script>

<style lang="scss" scoped>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>
