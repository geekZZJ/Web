/*
 * @Author: zzj
 * @Date: 2020-10-18 21:37:59
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-11 16:50:47
 * @Description:
 */
import axios from "@/utils/request";

const getCode = (sid) => {
  return axios.get("/public/getCaptcha", { params: { sid } });
};

const forget = (option) => {
  return axios.post("/login/forget", { ...option });
};

const login = (loginInfo) => {
  axios.post("/login/login", { ...loginInfo });
};

export { getCode, forget, login };
