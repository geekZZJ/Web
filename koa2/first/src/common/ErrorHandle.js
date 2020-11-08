/*
 * @Author: zzj
 * @Date: 2020-11-08 15:56:10
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-08 16:02:32
 * @Description:
 */
export default (ctx, next) => {
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: "Protected resource, use Authorization header to get access",
      };
    } else {
      throw err;
    }
  });
};
