/*
 * @Author: zzj
 * @Date: 2020-12-18 14:28:18
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-18 16:46:11
 * @Description:手写call
 */
Function.prototype.myCall = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  const result = context.fn(...args);
  delete context.fn;
  return result;
};
