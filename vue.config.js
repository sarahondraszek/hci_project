module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'de',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
