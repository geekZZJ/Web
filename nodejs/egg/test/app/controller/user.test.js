/*
 * @Author: zzj
 * @Date: 2021-05-23 15:29:27
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-31 21:52:52
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

  it('user detail', async () => {
    await app
      .httpRequest()
      .get('/user/detail?id=123')
      .expect('123')
      .expect(200);
  });

  it('user detail2', async () => {
    await app.httpRequest().get('/user/detail2/100').expect('100')
      .expect(200);
  });

  it('user add post', async () => {
    await app
      .httpRequest()
      .post('/user/add')
      .send({ name: 'test', age: 18 })
      .expect(200)
      .expect({
        status: 200,
        data: {
          name: 'test',
          age: 18,
        },
      });
  });
});
