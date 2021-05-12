/*
 * @Author: zzj
 * @Date: 2021-05-11 21:52:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-12 17:20:32
 * @Description:
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/class/component-old', component: '@/pages/component-old' },
  ],
  fastRefresh: {},
});
