import Vue from 'vue'
import VueResource from 'vue-resource'
import VueHead from 'vue-head'
import App from './App'
import router from './router'
import store from './store/index'

Vue.use(VueHead)
Vue.use(VueResource)

let API_URL = (process.env.NODE_ENV === 'production')
  ? `https://api.wcarron.com/${process.env.API_VERSION}`
  : `http://localhost:8080/${process.env.API_VERSION}`

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.http.headers.common['Authorization'] = `Bearer ${window.localStorage.getItem('token')}`
Vue.http.options.root = API_URL

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
