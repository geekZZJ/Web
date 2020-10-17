/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:12:06
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 17:20:37
 * @Description:
 */
class DemoController {
  constructor() {}
  async demo(ctx) {
    ctx.body = {
      msg: "body",
    };
  }
}

export default new DemoController();
