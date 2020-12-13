/*
 * @Author: zzj
 * @Date: 2020-12-13 11:30:01
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-13 14:38:28
 * @Description:
 */
import axios from "@/utils/request";
import store from "@/store";

// 用户签到
const userSign = () => {
  const headers = {
    Authorization: "Bearer " + store.state.token,
  };
  return axios.get("/user/fav", { headers });
};

export { userSign };
