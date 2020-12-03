/*
 * @Author: zzj
 * @Date: 2020-10-15 20:07:14
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-03 17:17:41
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/check",
    name: "Check",
    component: () =>
      import(/* webpackChunkName: "check" */ "@/views/Check.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
