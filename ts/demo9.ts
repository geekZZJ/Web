/*
 * @Author: zzj
 * @Date: 2020-12-09 22:37:49
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-11 10:48:13
 * @Description:
 */
// private、protected、public访问类型
// public允许在类的内外进行调用
// private允许在类的内部进行调用
// protected允许在类内以及继承的子类中使用

// class Person2 {
//   protected name = "lee";
//   public sayHi() {
//     this.name;
//     console.log("hi");
//   }
// }

// class Teacher1 extends person2 {
//   public sayBye() {
//     this.name;
//   }
// }

// const person2 = new Person2();
// person2.name = "dell";
// console.log(person2.name);
// person2.sayHi();

// constructor

// class Person2 {
//   // 传统写法
//   // public name: string;
//   // constructor(name: string) {
//   //   this.name = name;
//   // }
//   constructor(public name: string) {}
// }

// const person2 = new Person2("dell");
// console.log(person2.name);

class Person2 {
  // constructor(public name: string) {}
}

class Teacher2 extends Person2 {
  constructor(public age: number) {
    super();
  }
}

const teacher2 = new Teacher2(28);
// console.log(teacher2);
