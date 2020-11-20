/*
 * @Author: zzj
 * @Date: 2020-10-18 21:37:59
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-20 20:16:47
 * @Description:
 */
import axios from "@/utils/request";

/**
 * 获取uuid
 * @param {uuid} sid
 */
const getCode = (sid) => {
  return axios.get("/public/getCaptcha", { params: { sid } });
};

const forget = (option) => {
  return axios.post("/login/forget", { ...option });
};

/**
 * 登录
 * @param {登录信息} loginInfo
 */
const login = (loginInfo) => {
  return axios.post("/login/login", { ...loginInfo });
};

/**
 * 注册
 * @param {注册信息} regInfo
 */
const reg = (regInfo) => {
  return axios.post("/login/reg", { ...regInfo });
};

export { getCode, forget, login, reg };
