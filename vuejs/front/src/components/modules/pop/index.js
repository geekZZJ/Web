/*
 * @Author: zzj
 * @Date: 2020-12-13 12:57:18
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-13 14:24:28
 * @Description:
 */
import PopComponent from "./Pop.vue";

const Pop = {};

Pop.install = (Vue) => {
  const PopConstructor = Vue.extend(PopComponent);
  const instance = new PopConstructor();
  instance.$mount(document.createElement("div"));
  document.body.appendChild(instance.$el);

  // 4. 添加实例方法
  Vue.prototype.$pop = (type, msg) => {
    // 逻辑...
    instance.type = type;
    instance.msg = msg;
    instance.isShow = true;
  };
};

export default Pop;
