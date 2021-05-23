/*
 * @Author: zzj
 * @Date: 2021-05-23 15:00:34
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-23 15:05:38
 * @Description:
 */
const os = require("os");

module.exports = {
  get info() {
    const data = {
      memory: os.totalmem() / 1024 / 1024 / 1024 + "G",
      platform: os.platform(),
      cpus: os.cpus().length,
      url: this.request.url,
    };
    return data;
  },
};
