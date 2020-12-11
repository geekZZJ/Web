/*
 * @Author: zzj
 * @Date: 2020-12-02 15:52:38
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-02 16:50:20
 * @Description:
 */
const arr: (number | string)[] = [1, 2, 3, "1"];

type User = { name: string; age: number };
const objArr: User[] = [{ name: "dell", age: 28 }];

// 元组 tuple
const teacherInfo: [string, string, number] = ["test", "male", 28];

const teschList: [string, string, number][] = [
  ["test1", "male", 28],
  ["test2", "male", 28],
  ["test3", "male", 28],
];
