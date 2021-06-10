/*
 * @Author: zzj
 * @Date: 2021-06-10 15:58:47
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-10 16:02:03
 * @Description:
 */
module.exports = (options) => {
  return async (ctx, next) => {
    console.log("m2 start");
    await next();
    console.log("m2 end");
  };
};
