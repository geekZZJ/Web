import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Detail from '@/pages/Detail'
import DetailAnalysis from '@/pages/detail/analysis'
import DetailCount from '@/pages/detail/count'
import DetailForecast from '@/pages/detail/forecast'
import DetailPublish from '@/pages/detail/publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      redirect: '/detail/analysis',
      component: Detail,
      children: [
        {
          path: 'forecast',
          component: DetailForecast
        },
        {
          path: 'analysis',
          component: DetailAnalysis
        },
        {
          path: 'count',
          component: DetailCount
        },
        {
          path: 'publish',
          component: DetailPublish
        }
      ]
    }
  ]
})
