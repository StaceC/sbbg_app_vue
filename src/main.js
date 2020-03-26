import Vue from 'vue'
import App from './App.vue'
import webSocketService from './services/webSocketService'
import store from './store'

Vue.config.productionTip = false

Vue.use(webSocketService, {
  store,
  url: 'ws://localhost:8089/subscribe'
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
