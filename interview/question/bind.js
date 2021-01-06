/*
 * @Author: zzj
 * @Date: 2021-01-06 11:25:32
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-06 13:44:36
 * @Description:手写bind函数
 */

Function.prototype.myBind = function (context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  const _this = this;
  const args = [...arguments].slice(1);
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  };
};
