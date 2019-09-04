import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import ThingList from '@/views/ThingList'
import Edit from '@/views/Edit'
import Detail from '@/views/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/list',
      name: 'ThingList',
      component: ThingList
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
