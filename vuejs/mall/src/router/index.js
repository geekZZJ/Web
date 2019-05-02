import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Header from '@/components/Header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/546',
      name: 'Header',
      component: Header
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
