/*
 * @Author: zzj
 * @Date: 2020-12-15 09:34:07
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-15 10:00:27
 * @Description:
 */
import copy from "./copy";

const directives = {
  copy,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directives(key, directives[key]);
    });
  },
};
