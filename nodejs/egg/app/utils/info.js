/*
 * @Author: zzj
 * @Date: 2021-05-23 14:50:16
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-23 15:43:14
 * @Description:
 */
'use strict';
const os = require('os');

module.exports = () => {
  const data = {
    memory: os.totalmem() / 1024 / 1024 / 1024 + 'G',
    platform: os.platform(),
    cpus: os.cpus().length,
  };
  return data;
};
