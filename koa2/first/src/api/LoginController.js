/*
 * @Author: zzj
 * @Date: 2020-10-25 12:03:26
 * @LastEditors: zzj
 * @LastEditTime: 2020-10-25 12:17:11
 * @Description:
 */
import send from "../config/MailConfig";
import moment from "moment";

class LoginController {
  constructor() {}
  async forget(ctx) {
    const { body } = ctx.request;
    try {
      let result = await send({
        code: 1234,
        expire: moment().add(30, "m").format("YYYY-MM-DD HH:mm:ss"),
        email: body.username,
        user: "zzj",
      });
      ctx.body = {
        code: 200,
        data: result,
        msg: "邮件发送成功",
      };
    } catch (error) {
      console.log("error", error);
    }
  }
}

export default new LoginController();
