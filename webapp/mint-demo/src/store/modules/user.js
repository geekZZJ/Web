/*
 * @Author: zzj
 * @Date: 2021-03-30 17:33:00
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-31 10:15:53
 * @Description:
 */
import { INIT_WEBSOCKET } from "@/store/mutation-types.js";

export default {
  state: {
    userInfo: null,
  },
  mutations: {
    [INIT_WEBSOCKET](state) {},
  },
  getters: {
    user: (state) => state.userInfo,
  },
  actions: {},
};
