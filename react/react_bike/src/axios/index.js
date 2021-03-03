/*
 * @Author: zzj
 * @Date: 2021-01-23 17:08:51
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-03 21:20:45
 * @Description:
 */
import JSONP from "jsonp";
import axios from "axios";

export default class Axios {
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      JSONP(
        options.url,
        {
          param: "callback",
        },
        (err, data) => {
          if (data.status === 0) {
            resolve(data);
          } else {
            reject(data.message);
          }
        }
      );
    });
  }

  static ajax(options) {
    let baseApi = "http://baidu.com";
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: "get",
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || "",
      }).then((response) => {
        if (response.code === 200) {
          let res = response.data;
          if (res.code === 0) {
            resolve(res.data);
          } else {
            resolve(res.error);
          }
        } else {
          reject(response.data);
        }
      });
    });
  }
}
