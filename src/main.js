import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
// Vue.http.headers.common['Access-Control-Allow-Origin'] = true

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
