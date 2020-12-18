/*
 * @Author: zzj
 * @Date: 2020-12-18 17:14:15
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-18 17:25:57
 * @Description:手写apply
 */
// apply除context外其余参数都放在数组中传
Function.prototype.myApply = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context = context || window;
  context.fn = this;
  let result;
  // 处理参数和 call 有区别
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
