/*
 * @Author: zzj
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-10-18 21:54:19
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

Vue.config.productionTip = false;

axios.defaults.baseURL =
  process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
