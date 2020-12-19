/*
 * @Author: zzj
 * @Date: 2020-12-19 16:49:04
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-19 17:05:13
 * @Description:手写简易版深拷贝
 */
function deepClone(obj) {
  function isObject(o) {
    return (typeof o === "object" || typeof o === "function") && o !== null;
  }

  if (!isObject(obj)) {
    throw new Error("非对象");
  }

  let isArray = Array.isArray(obj);
  let newObj = isArray ? [...obj] : { ...obj };
  Reflect.ownKeys(newObj).forEach((key) => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
  });

  return newObj;
}
