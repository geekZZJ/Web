/*
 * @Author: zzj
 * @Date: 2021-05-22 18:33:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-26 22:32:04
 * @Description:
 */
'use strict';

// /** @type Egg.EggPlugin */
// module.exports = {
// had enabled by egg
// static: {
//   enable: true,
// }
// };

const path = require('path');

exports.info = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-info'),
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};
