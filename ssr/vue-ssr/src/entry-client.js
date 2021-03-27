/*
 * @Author: zzj
 * @Date: 2021-03-21 14:53:09
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-27 15:56:09
 * @Description:
 */
import { createApp } from "./app";

// 客户端特定引导逻辑……

const { app, router } = createApp();

// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => {
  app.$mount("#app");
});
