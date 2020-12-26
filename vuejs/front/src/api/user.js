/*
 * @Author: zzj
 * @Date: 2020-12-13 11:30:01
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-26 18:41:54
 * @Description:
 */
import axios from "@/utils/request";
import qs from "qs";

// 用户签到
const userSign = () => {
  return axios.get("/user/fav");
};

// 更新用户基本信息
const updateUserInfo = (data) => {
  return axios.post("/user/basic", data);
};

// 确认修改用户名
const updateUsername = (data) => {
  return axios.get("/public/resetEmail?" + qs.stringify(data));
};

// 修改用户密码
const changePassword = (data) => {
  return axios.post("/user/changepass", data);
};

export { userSign, updateUserInfo, updateUsername, changePassword };
