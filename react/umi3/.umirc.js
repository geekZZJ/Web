/*
 * @Author: zzj
 * @Date: 2021-05-11 21:52:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-16 15:14:56
 * @Description:
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/class/component-old', component: '@/pages/class/component-old' },
    { path: '/class/lists', component: '@/pages/class/lists' },
    { path: '/class/dva', component: '@/pages/class/dva' },
    { path: '/class/context', component: '@/pages/class/context' },
    { path: '/class/lazyload', component: '@/pages/class/lazy-load' },
    { path: '/class/modal', component: '@/pages/class/modal' },
  ],
  fastRefresh: {},
  dynamicImport: {},
});
