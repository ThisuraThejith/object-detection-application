module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://europe-west1-promiseq-production2.cloudfunctions.net/detectObjectsFromImg/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
}
