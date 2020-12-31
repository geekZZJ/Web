/*
 * @Author: zzj
 * @Date: 2020-12-25 15:52:28
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-31 14:14:09
 * @Description:函数泛型
 */
// 泛型，泛指的类型

// function join<ABC>(first: ABC, second: ABC) {
//   return `${first}${second}`;
// }

// join<string>("1", "1");
// join<number>(1, 1);

// function map<ABC>(params: Array<ABC>) {
//   return params;
// }

// function map<T>(params: T[]) {
//   return params;
// }

// map<string>(["123"]);

function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}

join<string, number>("1", 1);
