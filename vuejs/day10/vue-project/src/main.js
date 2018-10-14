import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './router.config'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:routerConfig
})

require('./assets/css/base.css')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
