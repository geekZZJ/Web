/*
 * @Author: zzj
 * @Date: 2021-01-06 14:00:55
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-20 16:38:26
 * @Description:手写new
 */
function create() {
  // 创建一个空对象
  let obj = {};
  // 获取构造函数
  let Con = [].shift.call(arguments);
  // 设置空对象的原型
  obj.__proto__ = Con.prototype;
  // 绑定 this 并执行构造函数
  let result = Con.apply(obj, arguments);
  // 确保返回值为对象
  return result instanceof Object ? result : obj;
}
