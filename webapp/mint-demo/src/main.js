/*
 * @Author: zzj
 * @Date: 2021-03-30 16:39:35
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-30 16:56:27
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Cell } from "mint-ui";

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
