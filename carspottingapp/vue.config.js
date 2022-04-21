const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/CarSpottingApp/'
    : '/',
  pwa: {
    name: 'Car Spotting App',
    short_name: 'Car Spotting App',
    themeColor: 'black',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
    // other PWA manifest configuration here...
  }
})
