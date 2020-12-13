/*
 * @Author: zzj
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-13 14:26:10
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/utils/veevalidate";
import Alert from "./components/modules/alert";
import Pop from "./components/modules/pop";

Vue.use(Alert);
Vue.use(Pop);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
