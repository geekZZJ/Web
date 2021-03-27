/*
 * @Author: zzj
 * @Date: 2021-03-27 18:18:14
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-27 18:20:01
 * @Description:
 */
export const state = () => ({
  counter: 0,
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}
