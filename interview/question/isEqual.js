/*
 * @Author: zzj
 * @Date: 2020-06-01 21:50:49
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-19 15:05:02
 * @Description:
 */
const obj1 = {
  a: 100,
  b: {
    x: 100,
    y: 200,
  },
};

const obj2 = {
  a: 100,
  b: {
    x: 100,
    y: 200,
  },
};

// console.log(obj1 === obj2); // false

/**
 * 判断是否是对象或数组
 * @param obj
 */
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

/**
 * 全相等(深度)
 * @param obj1
 * @param obj2
 * @returns {boolean}
 */
function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型
    return obj1 === obj2;
  }
  if (obj1 === obj2) {
    return true;
  }
  //两个都是引用类型
  const obj1Keys = Object.keys(obj1); //返回一个数组
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key in obj1) {
    //比较当前key,value,递归
    const res = isEqual(obj1[key], obj2[key]);
    if (!res) {
      return false;
    }
  }
  return true;
}

console.log(isEqual(obj1, obj2)); //true
