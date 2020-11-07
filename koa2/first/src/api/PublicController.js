/*
 * @Author: zzj
 * @Date: 2020-10-12 20:12:06
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-07 20:41:31
 * @Description:
 */
import svgCaptcha from "svg-captcha";

class PublicController {
  constructor() {}
  async getCaptcha(ctx) {
    const newCaptcha = svgCaptcha.create({
      size: 4,
      ignoreChars: "0o1il",
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 150,
      height: 38,
    });
    ctx.body = {
      code: 200,
      data: newCaptcha.data,
    };
  }
}

export default new PublicController();
