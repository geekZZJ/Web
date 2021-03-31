/*
 * @Author: zzj
 * @Date: 2021-03-30 16:39:35
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-31 10:13:53
 * @Description:
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const files = require.context("./modules", false, /\.js$/);
const modules = {};

// 动态加载vuex
files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

console.log(modules);

export default new Vuex.Store({
  modules,
});
