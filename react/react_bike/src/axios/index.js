/*
 * @Author: zzj
 * @Date: 2021-01-23 17:08:51
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-23 21:17:14
 * @Description:
 */
import JSONP from "jsonp";

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
}
