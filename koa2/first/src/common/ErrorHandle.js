/*
 * @Author: zzj
 * @Date: 2020-11-08 15:56:10
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-11 16:13:48
 * @Description:
 */
export default (ctx, next) => {
  return next().catch((err) => {
    if (401 === err.status) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: "Protected resource, use Authorization header to get access",
      };
    } else {
      ctx.status = err.status || 500;
      ctx.body = Object.assign(
        {
          code: 500,
          msg: err.message,
        },
        process.env.NODE_ENV === "dev" ? { stack: err.stack } : {}
      );
    }
  });
};
