/*
 * @Author: zzj
 * @Date: 2021-01-06 14:40:31
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-06 14:54:27
 * @Description:手写instanceof
 */
function myInstanceof(left, right) {
  // 首先获取类型的原型
  let prototype = right.prototype;
  // 然后获得对象的原型
  left = left.__proto__;
  // 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
  while (true) {
    if (left === null || left === undefined) return false;
    if (prototype === left) return true;
    left = left.__proto__;
  }
}
