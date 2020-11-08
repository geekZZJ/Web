/*
 * @Author: zzj
 * @Date: 2020-10-25 12:03:26
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-08 17:13:31
 * @Description:
 */
import send from "../config/MailConfig";
import moment from "moment";
import jsonwebtoken from "jsonwebtoken";
import config from "../config";

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
  async login(ctx) {
    let token = jsonwebtoken.sign({ _id: "test" }, config.JWT_SECRET, {
      expiresIn: "1d",
    });
    ctx.body = {
      code: 200,
      token,
    };
  }
}

export default new LoginController();
