/*
 * @Author: zzj
 * @Date: 2021-05-11 21:52:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-18 21:44:39
 * @Description:
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
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
  ],
  fastRefresh: {},
  dynamicImport: {},
});
