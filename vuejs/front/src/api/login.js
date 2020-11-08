/*
 * @Author: zzj
 * @Date: 2020-10-18 21:37:59
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-08 14:45:56
 * @Description:
 */
import axios from "@/utils/request";

const getCode = (sid) => {
  return axios.get("/getCaptcha", { params: { sid } });
};

const forget = (option) => {
  return axios.post("/forget", { ...option });
};

const login = (loginInfo) => {
  axios.post("/login", { ...loginInfo });
};

export { getCode, forget, login };
