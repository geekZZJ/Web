/*
 * @Author: zzj
 * @Date: 2020-10-18 21:37:59
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-07 20:31:12
 * @Description:
 */
import axios from "@/utils/request";

const getCode = () => {
  return axios.get("/getCaptcha");
};

const forget = (option) => {
  return axios.post("/forget", { ...option });
};

export { getCode, forget };
