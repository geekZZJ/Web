/*
 * @Author: zzj
 * @Date: 2021-05-13 11:25:56
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-15 16:10:55
 * @Description:
 */
import { getLists } from '@/services/search';
export default {
  namespace: 'search',
  state: {
    text: 'dva',
    lists: [],
  },
  // 同步
  reducers: {
    getLists(state, action) {
      return {
        ...state,
        lists: Array(10).fill(action.payload),
      };
    },
  },
  // 异步
  effects: {
    *getListsAsync({ payload }, { call, put }) {
      const res = yield call(getLists, payload);
      console.log('res', res);
      yield put({
        type: 'getLists',
        payload: res.lists,
      });
    },
  },
};
