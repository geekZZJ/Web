/*
 * @Author: zzj
 * @Date: 2021-05-11 21:52:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-07-05 11:36:55
 * @Description:
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/', component: './home/index', title: '首页' },
        { path: '/order', component: './order/index', title: '订单' },
        { path: '/user', component: './user/index', title: '用户' },
        { path: '/search', component: './search/index', title: '搜索' },
        { path: '/observer', component: './observer', title: 'observer' },
      ],
    },
    { path: '/class', component: '@/pages/class' },
    { path: '/class/component-old', component: '@/pages/class/component-old' },
    { path: '/class/lists', component: '@/pages/class/lists' },
    { path: '/class/dva', component: '@/pages/class/dva' },
    { path: '/class/context', component: '@/pages/class/context' },
    { path: '/class/lazyload', component: '@/pages/class/lazy-load' },
    { path: '/class/modal', component: '@/pages/class/modal' },
    { path: '/class/refs', component: '@/pages/class/refs' },
    { path: '/function', component: '@/pages/function' },
    { path: '/function/hook', component: '@/pages/function/hook' },
    { path: '/function/context', component: '@/pages/function/context' },
    { path: '/function/customize', component: '@/pages/function/customize' },
    { path: '/function/store', component: '@/pages/function/store' },
  ],
  fastRefresh: {},
  dynamicImport: {},
});
