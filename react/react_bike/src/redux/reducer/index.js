/*
 * @Author: zzj
 * @Date: 2021-03-08 16:11:09
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-08 16:30:01
 * @Description:
 */
import { type } from "../action";
const initState = {
  menuName: "首页",
};

function test(state = initState, action) {
  switch (action) {
    case type.SWITCH_MENU:
      return {
        ...state,
        menuName: action.menuName,
      };
    default:
      break;
  }
}

export default test;
