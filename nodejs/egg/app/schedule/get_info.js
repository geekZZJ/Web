/*
 * @Author: zzj
 * @Date: 2021-06-13 16:38:12
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 16:48:17
 * @Description:
 */
const Subscription = require("egg").Subscription;

class getInfo extends Subscription {
  // static get schedule() {
  //   return {
  //     // interval: 3000,
  //     cron: "*/3 * * * * *",
  //     type: "worker",
  //   };
  // }
  // async subscribe() {
  //   const info = this.ctx.info;
  //   console.log(Date.now(), info);
  // }
}

module.exports = getInfo;
