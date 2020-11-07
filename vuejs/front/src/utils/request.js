/*
 * @Author: zzj
 * @Date: 2020-11-07 20:23:57
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-07 20:28:31
 * @Description:
 */
import HttpRequest from "./axios";
import config from "@/config";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? config.baseUrl.dev
    : config.baseUrl.pro;

const axios = new HttpRequest(baseUrl);

export default axios;
