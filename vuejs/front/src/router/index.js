/*
 * @Author: zzj
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-25 22:31:20
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
  {
    path: "/center",
    name: "Center",
    linkExactActiveClass: "layui-this",
    component: () =>
      import(/* webpackChunkName: "center" */ "@/views/Center.vue"),
    children: [
      {
        path: "",
        name: "UserCenter",
        component: () =>
          import(
            /* webpackChunkName: "usercenter" */ "@/components/user/Center.vue"
          ),
      },
      {
        path: "set",
        name: "Set",
        component: () =>
          import(
            /* webpackChunkName: "set" */ "@/components/user/Settings.vue"
          ),
      },
      {
        path: "post",
        name: "Post",
        component: () =>
          import(/* webpackChunkName: "post" */ "@/components/user/Post.vue"),
      },
      {
        path: "msg",
        name: "Msg",
        component: () =>
          import(/* webpackChunkName: "msg" */ "@/components/user/Msg.vue"),
      },
      {
        path: "others",
        name: "Others",
        component: () =>
          import(
            /* webpackChunkName: "others" */ "@/components/user/Others.vue"
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
