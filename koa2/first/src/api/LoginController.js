/*
 * @Author: zzj
 * @Date: 2020-10-25 12:03:26
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-11 10:50:17
 * @Description:
 */
import send from "../config/MailConfig";
import moment from "moment";
import jsonwebtoken from "jsonwebtoken";
import config from "../config";
import { checkCode } from "../common/Utils";
import User from "../model/User";

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
    const { body } = ctx.request;
    let sid = body.sid;
    let vercode = body.vercode;
    // 验证图片验证码的时效性、正确性
    let result = await checkCode(sid, vercode);
    if (result) {
      // 验证账号密码
      let checkUserPassword = false;
      const user = await User.findOne({ username: body.username });
      console.log("user", user);
      if (user.password === body.password) {
        checkUserPassword = true;
      }
      if (checkUserPassword) {
        // 验证通过，返回token
        let token = jsonwebtoken.sign({ _id: "test" }, config.JWT_SECRET, {
          expiresIn: "1d",
        });
        ctx.body = {
          code: 200,
          token,
        };
      } else {
        ctx.body = {
          code: 200,
          msg: "用户名或密码不正确",
        };
      }
    } else {
      ctx.body = {
        code: 401,
        msg: "图片验证码不正确",
      };
    }
  }
}

export default new LoginController();
