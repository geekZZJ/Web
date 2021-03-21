/*
 * @Author: zzj
 * @Date: 2021-03-21 14:53:09
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-21 14:56:21
 * @Description:
 */
import { createApp } from "./app";

// 客户端特定引导逻辑……

const { app } = createApp();

// 这里假定 App.vue 模板中根元素具有 `id="app"`
app.$mount("#app");
