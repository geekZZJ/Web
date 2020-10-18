/*
 * @Author: zzj
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-10-18 19:46:27
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/reg",
    name: "Reg",
    component: () => import(/* webpackChunkName: "reg" */ "@/views/Reg.vue"),
  },
  {
    path: "/forget",
    name: "Forget",
    component: () =>
      import(/* webpackChunkName: "forget" */ "@/views/Forget.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
