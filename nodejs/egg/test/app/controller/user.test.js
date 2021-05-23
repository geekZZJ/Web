/*
 * @Author: zzj
 * @Date: 2021-05-23 15:29:27
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-23 15:51:55
 * @Description:
 */
'use strict';
const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  it('user lists', async () => {
    await app
      .httpRequest()
      .get('/user/lists')
      .expect('[{"id":123}]')
      .expect(200);
    // const pkg = require("../../../package.json");
    // assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('user index', () => {
    return app.httpRequest().get('/user').expect('user index')
      .expect(200);
  });
});
