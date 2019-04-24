import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Images from '@/views/Images'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
      children:[
        {
          path:'title',
          component:Title
        },
        {
          path:'images',
          component:Images
        }
      ]
    },
    {
      path: '/cart',
      component:Cart
    }
  ]
})
