/*
 * @Author: zzj
 * @Date: 2021-05-31 22:20:20
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-31 22:26:20
 * @Description:
 */
'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('service user test', () => {
  it.only('test detail', async () => {
    const ctx = app.mockContext();
    const user = await ctx.service.user.detail(10);
    assert(user);
    assert(user.id === 10);
  });
});
