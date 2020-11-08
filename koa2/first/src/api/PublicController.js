/*
 * @Author: zzj
 * @Date: 2020-10-12 20:12:06
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-08 14:29:51
 * @Description:
 */
import svgCaptcha from "svg-captcha";
import { setValue, getValue } from "../config/RedisConfig";

class PublicController {
  constructor() {}
  async getCaptcha(ctx) {
    const body = ctx.request.query;
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: "0o1il",
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 38,
    });
    // 保存图片验证码数据，设置超时时间，单位s
    setValue(body.sid, newCaptcha.text, 10 * 60);
    ctx.body = {
      code: 200,
      data: newCaptcha.data,
    };
  }
}

export default new PublicController();
