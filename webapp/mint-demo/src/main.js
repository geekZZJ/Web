/*
 * @Author: zzj
 * @Date: 2021-03-30 16:39:35
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-01 11:14:15
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@/plugins/mint-ui";
import "@/plugins/common";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
