/*
 * @Author: zzj
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-20 17:03:09
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import store from "@/store";
import jwt from "jsonwebtoken";
import moment from "moment";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/confirm",
    name: "Confirm",
    component: () =>
      import(/* webpackChunkName: "confirm" */ "@/views/Confirm.vue"),
  },
  {
    path: "/reset",
    name: "Reset",
    component: () =>
      import(/* webpackChunkName: "reset" */ "@/views/Reset.vue"),
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
    path: "/user/:uid",
    name: "User",
    props: true,
    component: () => import(/* webpackChunkName: "user" */ "@/views/User.vue"),
  },
  {
    path: "/",
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
    linkExactActiveClass: "layui-this",
    meta: { requiresAuth: true },
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
        component: () =>
          import(
            /* webpackChunkName: "set" */ "@/components/user/Settings.vue"
          ),
        children: [
          {
            path: "",
            name: "Info",
            component: () =>
              import(
                /* webpackChunkName: "info" */ "@/components/user/common/MyInfo.vue"
              ),
          },
          {
            path: "pic",
            name: "Pic",
            component: () =>
              import(
                /* webpackChunkName: "uploadpic" */ "@/components/user/common/PicUpload.vue"
              ),
          },
          {
            path: "passwd",
            name: "Passwd",
            component: () =>
              import(
                /* webpackChunkName: "passwd" */ "@/components/user/common/Passwd.vue"
              ),
          },
          {
            path: "accounts",
            name: "Accounts",
            component: () =>
              import(
                /* webpackChunkName: "accounts" */ "@/components/user/common/Accounts.vue"
              ),
          },
        ],
      },
      {
        path: "post",
        component: () =>
          import(/* webpackChunkName: "post" */ "@/components/user/Post.vue"),
        children: [
          {
            path: "",
            name: "MyPost",
            component: () =>
              import(
                /* webpackChunkName: "mypost" */ "@/components/user/common/MyPost.vue"
              ),
          },
          {
            path: "mycollection",
            name: "MyCollection",
            component: () =>
              import(
                /* webpackChunkName: "mycollection" */ "@/components/user/common/MyCollection.vue"
              ),
          },
        ],
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
  {
    path: "/404",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "@/views/NotFound.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "layui-this",
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (token !== "" && token !== null) {
    const payload = jwt.decode(token);
    if (moment().isBefore(moment(payload.exp * 1000))) {
      store.commit("setToken", token);
      store.commit("setUserInfo", userInfo);
      store.commit("setIsLogin", true);
    } else {
      localStorage.clear();
    }
  }
  if (
    to.matched.some((record) => {
      record.meta.requiresAuth;
    })
  ) {
    const isLogin = store.state.isLogin;
    if (isLogin) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
