/*
 * @Author: zzj
 * @Date: 2021-03-27 22:22:57
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-27 22:22:59
 * @Description:
 */
export const state = () => ({
  counter: 0
});

export const mutations = {
  increment(state) {
    state.counter++;
  }
};
