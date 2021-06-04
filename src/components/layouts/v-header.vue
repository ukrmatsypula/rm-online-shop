<template>
  <div class="v-header">
    <router-link :to="{ name: 'mainPage' }">
      <img :src="require('@/assets/images/logo.png')" alt="logo" />
    </router-link>
    <div class="search-field">
      <input type="text" v-model="searchValue" />
      <button class="search-btn" @click="search(searchValue)">
        <i class="material-icons">search</i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'v-header',
  data: () => ({
    searchValue: '',
  }),
  computed: {
    ...mapGetters(['SEARCH_VALUE']),
  },
  methods: {
    ...mapActions(['SET_SEARCH_VALUE_TO_VUEX']),
    search(value) {
      this.SET_SEARCH_VALUE_TO_VUEX(value)
      if (this.$route.path !== '/catalog') {
        this.$router.push('/catalog')
      }
      this.searchValue = ''
    },
  },
}
</script>

<style lang="scss">
.v-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $green-bg;
  padding: $padding * 2;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  img {
    width: 50px;
  }
  .search-field {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $padding * 2;

    & > button {
      border: 0;
      background: none;
      cursor: pointer;
      color: #fff;
      margin-top: 5px;
    }
  }
}
</style>
