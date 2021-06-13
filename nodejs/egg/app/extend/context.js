/*
 * @Author: zzj
 * @Date: 2021-05-23 14:55:22
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 13:47:36
 * @Description:
 */
// const os = require("os");

// module.exports = {
//   get info() {
//     const data = {
//       memory: os.totalmem() / 1024 / 1024 / 1024 + "G",
//       platform: os.platform(),
//       cpus: os.cpus().length,
//       url: this.request.url,
//     };
//     return data;
//   },
// };

module.exports = {
  params(key) {
    const method = this.request.method;
    if (method === "GET") {
      return key ? this.query[key] : this.query;
    } else {
      return key ? this.request.body[key] : this.request.body;
    }
  },
};
