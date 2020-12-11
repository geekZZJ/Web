/*
 * @Author: zzj
 * @Date: 2020-06-27 12:46:56
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-02 14:58:49
 * @Description: 
 */
// 基础类型 null,undefined,symbol,boolean,void
const count: number = 123;
const teacherName: string = "zzj";

// 对象类型
const teacher: {
  name: string;
  age: number;
} = {
  name: "zzj",
  age: 18,
};

const numbers: number[] = [1, 2, 3];

class Person {}

const dell: Person = new Person();

// const getTotal: () => number = () => {
//   return 123;
// }
