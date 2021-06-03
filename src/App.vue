<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>
import vMainWrapper from '@/components/v-main-wrapper'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    vMainWrapper,
  },
  computed: {
    ...mapGetters(['IS_MOBILE', 'IS_DESKTOP']),
  },
  methods: {
    ...mapActions(['SET_DESKTOP', 'SET_MOBILE']),
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767) {
        this.SET_DESKTOP()
        console.log('desktop', this.IS_DESKTOP)
      } else {
        this.SET_MOBILE()
        console.log('mobile', this.IS_MOBILE)
      }
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
</style>
