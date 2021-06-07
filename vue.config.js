module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/rm-online-shop/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/styles.scss";`,
      },
    },
  },
}
