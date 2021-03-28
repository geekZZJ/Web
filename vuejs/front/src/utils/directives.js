/*
 * @Author: zzj
 * @Date: 2021-03-28 17:26:45
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-28 17:34:17
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
};
