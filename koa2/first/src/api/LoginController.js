/*
 * @Author: zzj
 * @Date: 2020-10-25 12:03:26
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-24 22:15:28
 * @Description:
 */
import send from "../config/MailConfig";
import moment from "moment";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";
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
    let { sid, vercode } = body;
    // 验证图片验证码的时效性、正确性
    let result = await checkCode(sid, vercode);
    if (result) {
      // 验证账号密码
      let checkUserPassword = false;
      const user = await User.findOne({ username: body.username });
      if (await bcrypt.compare(body.password, user.password)) {
        checkUserPassword = true;
      }
      if (checkUserPassword) {
        const userObj = user.toJSON();
        const arr = ["username", "password", "roles"];
        arr.map((item) => {
          delete userObj[item];
        });
        // 验证通过，返回token
        let token = jsonwebtoken.sign({ _id: "test" }, config.JWT_SECRET, {
          expiresIn: "1d",
        });
        ctx.body = {
          code: 200,
          data: userObj,
          token,
        };
      } else {
        ctx.body = {
          code: 500,
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
  async reg(ctx) {
    // 接收客户端的数据
    const { body } = ctx.request;
    // 校验验证码的内容(有效性、时效性)
    const { sid, vercode, username, name } = body;
    const password = await bcrypt.hash(body.password, 5);
    const msg = {};
    const result = await checkCode(sid, vercode);
    let check = true;
    if (result) {
      // 看name和username是否被注册
      const user1 = await User.findOne({ username });
      if (user1 !== null && typeof user1.username !== "undefined") {
        msg.username = ["此邮箱已注册，可通过邮箱找回密码"];
        check = false;
      }
      const user2 = await User.findOne({ name });
      if (user2 !== null && typeof user2.name !== "undefined") {
        msg.name = ["此昵称已注册，请修改"];
        check = false;
      }
      // 写入数据到数据库
      if (check) {
        const user = new User({
          username,
          name,
          password,
          created: moment().format("YYYY-MM-DD HH:mm:ss"),
        });
        const result = await user.save();
        ctx.body = {
          code: 200,
          data: result,
          msg: "注册成功",
        };
        return;
      }
    } else {
      msg.vercode = ["验证码失效，请重新获取"];
    }
    ctx.body = {
      code: 500,
      msg,
    };
  }
}

export default new LoginController();
