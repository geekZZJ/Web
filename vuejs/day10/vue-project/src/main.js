import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
import store from './store/index.js'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:routerConfig
})

require('./assets/css/base.css')

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
