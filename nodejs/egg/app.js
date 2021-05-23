/*
 * @Author: zzj
 * @Date: 2021-05-23 14:37:20
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-23 14:39:05
 * @Description:
 */
module.exports = (app) => {
  console.log("egg init");
  app.messenger.on("agentAction", (data) => {
    console.log(data);
  });
};
