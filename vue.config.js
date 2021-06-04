module.exports = {
  publicPath: '/rm-online-shop/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/styles.scss";`
      }
    }
  }
};