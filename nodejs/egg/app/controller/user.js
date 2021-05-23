/*
 * @Author: zzj
 * @Date: 2021-05-23 15:17:27
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-23 15:26:47
 * @Description:
 */
'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'user index';
  }

  async lists() {
    const { ctx } = this;
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    ctx.body = [{ id: 123 }];
  }
}

module.exports = UserController;
