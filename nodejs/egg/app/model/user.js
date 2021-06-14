/*
 * @Author: zzj
 * @Date: 2021-06-14 18:24:36
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-14 18:33:40
 * @Description:
 */
module.exports = (app) => {
  const { STRING, INTEGER } = app.Sequelize;
  const User = app.model.define("user", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(20),
    pwd: STRING(50),
  });

  return User;
};
