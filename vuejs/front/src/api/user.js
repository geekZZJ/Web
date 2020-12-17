/*
 * @Author: zzj
 * @Date: 2020-12-13 11:30:01
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-17 16:59:48
 * @Description:
 */
import axios from "@/utils/request";
import store from "@/store";

// 用户签到
const userSign = () => {
  return axios.get("/user/fav");
};

// 更新用户基本信息
const updateUserInfo = (data) => {
  return axios.post("/user/basic", data);
};

export { userSign, updateUserInfo };
