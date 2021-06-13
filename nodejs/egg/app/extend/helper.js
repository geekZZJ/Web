/*
 * @Author: zzj
 * @Date: 2021-06-13 14:19:20
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 14:20:40
 * @Description:
 */
module.exports = {
  base64Encode(str = "") {
    return new Buffer(str).toString("base64");
  },
};
