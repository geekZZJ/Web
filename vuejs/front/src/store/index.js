/*
 * @Author: zzj
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-29 16:04:31
 * @Description:
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sid: "",
    isLogin: false,
    token: "",
    userInfo: {},
  },
  mutations: {
    setSid(state, value) {
      state.sid = value;
    },
    setToken(state, value) {
      state.token = value;
      localStorage.setItem("token", value);
    },
    // 保存用户的基本信息
    setUserInfo(state, value) {
      if (value === "") {
        return;
      }
      state.userInfo = value;
      localStorage.setItem("userInfo", JSON.stringify(value));
    },
    // 设置isLogin的状态
    setIsLogin(state, value) {
      state.isLogin = value;
    },
  },
  actions: {},
  modules: {},
});
