/*
 * @Author: zzj
 * @Date: 2020-11-20 20:15:23
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-25 17:27:17
 * @Description:
 */
import axios from "@/utils/request";
import qs from "qs";

/**
 * @description: 读取文章列表
 * @param {*} options 参数
 * @return {*}
 */
const getList = (options) => {
  return axios.get("/public/list?" + qs.stringify(options));
};

/**
 * @description: 温馨提醒
 * @param {*}
 * @return {*}
 */
const getTips = () => {
  return axios.get("/public/tips");
};

/**
 * @description: 友情链接
 * @param {*}
 * @return {*}
 */
const getLinks = () => {
  return axios.get("/public/links");
};

/**
 * @description: 本周热议
 * @param {*}
 * @return {*}
 */
const getTop = () => {
  return axios.get("/public/topWeek");
};

/**
 * 上传图片
 * @param {*} formData
 */
const uploadImg = (formData) => {
  return axios.post("/content/upload", formData);
};

export { getList, getTips, getLinks, getTop, uploadImg };
