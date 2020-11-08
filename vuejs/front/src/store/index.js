/*
 * @Author: zzj
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-08 11:27:13
 * @Description:
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sid: "",
  },
  mutations: {
    setSid(state, value) {
      state.sid = value;
    },
  },
  actions: {},
  modules: {},
});
