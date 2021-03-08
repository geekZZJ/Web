/*
 * @Author: zzj
 * @Date: 2021-03-08 16:07:16
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-08 16:10:45
 * @Description:
 */
export const type = {
  SWITCH_MENU: "SWITCH_MENU",
};

export function switchMenu(menuName) {
  return {
    type: type.SWITCH_MENU,
    menuName,
  };
}
