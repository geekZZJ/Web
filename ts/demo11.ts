/*
 * @Author: zzj
 * @Date: 2020-12-11 16:30:21
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-11 17:40:55
 * @Description:
 */
// readonly
// class Person4 {
//   public readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const person4 = new Person4("dell");
// console.log(person4.name);

// 抽象类
// abstract class Geom {
//   abstract getArea(): number;
// }

// class Circle extends Geom {
//   getArea() {
//     return 123;
//   }
// }

interface Person4 {
  name: string;
}

interface Teacher extends Person4 {}

interface Student extends Person4 {
  age: number;
}

const teacher4 = {
  name: "dell",
};

const student4 = {
  name: "lee",
  age: 14,
};

const getUserInfo = (user: Person4) => {
  console.log(user.name);
};

getUserInfo(teacher4);
getUserInfo(student4);
