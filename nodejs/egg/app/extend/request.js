/*
 * @Author: zzj
 * @Date: 2021-06-13 14:00:54
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 14:09:24
 * @Description:
 */

module.exports = {
  get token() {
    // console.log("header", this.header);
    return this.get("token");
  },
};
