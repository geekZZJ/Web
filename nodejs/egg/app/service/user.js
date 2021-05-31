/*
 * @Author: zzj
 * @Date: 2021-05-31 22:08:28
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-31 22:13:08
 * @Description:
 */
'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async detail(id) {
    return {
      id,
      name: 'test',
      age: 18,
    };
  }
}

module.exports = UserService;
