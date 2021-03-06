/*
 * @Author: zzj
 * @Date: 2020-12-06 15:34:56
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-26 21:52:19
 * @Description:
 */
import SignRecord from "../model/SignRecord";
import { getJWTPayload } from "../common/Utils";
import User from "../model/User";
import moment from "dayjs";
import send from "../config/MailConfig";
import { v4 as uuidv4 } from "uuid";
import jsonwebtoken from "jsonwebtoken";
import { setValue, getValue } from "../config/RedisConfig";
import config from "../config";
import bcrypt from "bcrypt";

class UserController {
  // 用户签到
  async userSign(ctx) {
    const obj = await getJWTPayload(ctx.header.authorization);
    const record = await SignRecord.findByUid(obj._id);
    const user = await User.findByID(obj._id);
    let newRecord = {};
    let result = null;
    if (record !== null) {
      // 有历史签到数据
      // 判断用户上一次签到记录的created时间是否与今天相同
      if (
        moment(record.created).format("YYYY-MM-DD") ===
        moment().format("YYYY-MM-DD")
      ) {
        ctx.body = {
          code: 500,
          favs: user.favs,
          count: user.count,
          lastSign: record.created,
          msg: "用户已经签到",
        };
        return;
      } else {
        // 有上次的签到记录，并且不与今天相同
        let count = user.count;
        // 用户签到可获得积分
        let fav = 0;
        // 用户连续签到
        if (
          moment(record.created).format("YYYY-MM-DD") ===
          moment().subtract(1, "day").format("YYYY-MM-DD")
        ) {
          count += 1;
          if (count < 5) {
            fav = 5;
          } else if (count >= 5 && count < 15) {
            fav = 10;
          } else if (count >= 15 && count < 30) {
            fav = 15;
          } else if (count >= 30 && count < 100) {
            fav = 20;
          } else if (count >= 100 && count < 365) {
            fav = 30;
          } else if (count >= 365) {
            fav = 50;
          }
          await User.updateOne(
            { _id: obj._id },
            { $inc: { favs: fav, count: 1 } }
          );
          result = {
            favs: user.favs + fav,
            count: user.count + 1,
          };
        } else {
          // 用户中断了操作
          fav = 5;
          await User.updateOne(
            { _id: obj._id },
            { $set: { count: 1 }, $inc: { favs: fav } }
          );
          result = {
            favs: user.favs + fav,
            count: 1,
          };
        }
        // 更新用户的签到记录
        newRecord = new SignRecord({
          uid: obj._id,
          favs: fav,
        });
        await newRecord.save();
      }
    } else {
      // 无历史签到数据
      // 保存用户的签到数据
      await User.updateOne(
        {
          _id: obj._id,
        },
        { $set: { count: 1 }, $inc: { favs: 5 } }
      );
      // 保存用户的签到记录
      newRecord = new SignRecord({
        uid: obj._id,
        favs: 5,
      });
      await newRecord.save();
      result = {
        favs: user.favs + 5,
        count: 1,
      };
    }
    ctx.body = {
      code: 200,
      msg: "请求成功",
      ...result,
      lastSign: newRecord.created,
    };
  }

  // 更新用户信息
  async updateUserInfo(ctx) {
    const { body } = ctx.request;
    const obj = await getJWTPayload(ctx.header.authorization);
    const user = await User.findOne({ _id: obj._id });
    let msg = "";
    if (body.username && body.username !== user.username) {
      // 用户修改了邮箱
      const tempUser = await User.findOne({ username: body.username });
      if (tempUser && tempUser.password) {
        ctx.body = {
          code: 501,
          msg: "邮箱已经注册",
        };
        return;
      }
      try {
        const key = uuidv4();
        setValue(
          key,
          jsonwebtoken.sign({ _id: obj._id }, config.JWT_SECRET, {
            expiresIn: "30m",
          })
        );
        const result = await send({
          type: "email",
          data: { username: body.username, key },
          code: "",
          expire: moment().add(30, "m").format("YYYY-MM-DD HH:mm:ss"),
          email: user.username,
          user: user.name,
        });
        msg = "邮件发送成功";
      } catch (error) {
        console.log("error", error);
      }
    }
    const arr = ["username", "mobile", "password"];
    arr.map((item) => {
      delete body[item];
    });
    const result = await User.updateOne({ _id: obj._id }, body);
    if (result.n === 1 && result.ok === 1) {
      ctx.body = {
        code: 200,
        msg: msg === "" ? "修改成功" : msg,
      };
    } else {
      ctx.body = {
        code: 500,
        msg: "修改失败",
      };
    }
  }

  // 更新用户名
  async updateUsername(ctx) {
    const body = ctx.query;
    if (body.key) {
      const token = await getValue(body.key);
      const obj = await getJWTPayload("Bearer " + token);
      await User.updateOne({ _id: obj._id }, { username: body.username });
      ctx.body = {
        code: 200,
        msg: "更新用户名成功",
      };
    }
  }

  // 修改用户密码
  async changePass(ctx) {
    const { body } = ctx.request;
    const obj = await getJWTPayload(ctx.header.authorization);
    const user = await User.findOne({ _id: obj._id });
    if (await bcrypt.compare(body.oldpwd, user.password)) {
      const newpwd = await bcrypt.hash(body.newpwd, 5);
      await User.updateOne({ _id: obj._id }, { $set: { password: newpwd } });
      ctx.body = {
        code: 200,
        msg: "更新密码成功",
      };
    } else {
      ctx.body = {
        code: 500,
        msg: "原密码输入错误，请重试",
      };
    }
  }
}

export default new UserController();
