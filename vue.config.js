module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? ''
      : '/',
  
    pwa: {
      name: 'VueTasker',
      themeColor: 'hsl(208, 79%, 51%)',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
      manifestOptions: {
        display: 'landscape',
        background_color: 'hsl(208, 79%, 51%)'
      }
    }
  }
  