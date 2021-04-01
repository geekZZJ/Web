/*
 * @Author: zzj
 * @Date: 2021-03-31 21:55:16
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-31 22:27:08
 * @Description:
 */
import Vue from "vue";

const componentsContext = require.context("@/components", true, /index.vue$/);

componentsContext.keys().forEach((component) => {
  const componentConfig = componentsContext(component).default;
  Vue.component(componentConfig.name, componentConfig);
});
