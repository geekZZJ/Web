/*
 * @Author: zzj
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-17 14:52:44
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
    beforeEnter: (to, from, next) => {
      if (from.name === "Login") {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/forget",
    name: "Forget",
    component: () =>
      import(/* webpackChunkName: "forget" */ "@/views/Forget.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    children: [
      {
        path: "",
        name: "Index",
        component: () =>
          import(/* webpackChunkName: "index" */ "@/views/channels/Index.vue"),
      },
      {
        path: "/index/:catalog",
        name: "Template1",
        component: () =>
          import(
            /* webpackChunkName: "template1" */ "@/views/channels/Template1.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "layui-this",
});

export default router;
