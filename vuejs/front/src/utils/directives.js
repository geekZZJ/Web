/*
 * @Author: zzj
 * @Date: 2021-03-28 17:26:45
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-28 17:50:16
 * @Description:
 */
import store from "@/store";

export default {
  hasRole: {
    inserted: function(el, binding) {
      let roles = store.state.userInfo.roles || ["user"];
      if (!roles.includes(binding.value)) {
        el.parentNode.removeChild(el);
      }
    },
  },
  // 操作级别权限控制通过路由加自定义指令实现
  hasPermission: {
    inserted: function(el, binding, vnode) {
      // console.log(binding.value);
      // console.log(vnode.context);
      let types = vnode.context.$route.meta.types;
      let values = binding.value;
      let flag = true;
      for (let v of values) {
        if (!types.includes(v)) {
          flag = false;
        }
      }
      if (!flag) {
        el.parentNode.removeChild(el);
      }
    },
  },
};
