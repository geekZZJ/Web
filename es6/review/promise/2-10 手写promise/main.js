/*
 * @Author: zzj
 * @Date: 2020-11-17 22:05:46
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-18 10:47:47
 * @Description:
 */
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
  const that = this;
  that.state = PENDING;
  that.value = null;
  that.resolvedCallbacks = [];
  that.rejectedCallbacks = [];
  // resolve 和 reject 函数
  function resolve(value) {
    // 判断当前状态是否为等待中
    if (that.state === PENDING) {
      that.state = RESOLVED;
      that.value = value;
      that.resolvedCallbacks.map((cb) => cb(that.value));
    }
  }

  function reject(value) {
    // 判断当前状态是否为等待中
    if (that.state === PENDING) {
      that.state = REJECTED;
      that.value = value;
      that.rejectedCallbacks.map((cb) => cb(that.value));
    }
  }
  // 执行 fn 函数
  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  const that = this;
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (r) => {
          throw r;
        };
  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled);
    that.rejectedCallbacks.push(onRejected);
  }
  if (that.state === RESOLVED) {
    onFulfilled(that.value);
  }
  if (that.state === REJECTED) {
    onRejected(that.value);
  }
};
