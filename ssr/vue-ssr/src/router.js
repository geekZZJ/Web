/*
 * @Author: zzj
 * @Date: 2021-03-27 15:25:10
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-27 15:56:47
 * @Description:
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/hello",
      component: () =>
        import(/*webpackChunkName:"hello"*/ "./components/Hello.vue"),
    },
  ],
});
