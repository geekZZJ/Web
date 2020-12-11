/*
 * @Author: zzj
 * @Date: 2020-12-11 10:52:54
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-11 16:29:16
 * @Description:
 */

//  getter、setter
// class Person3 {
//   constructor(private _name: string) {}
//   get name() {
//     return this._name;
//   }
//   set name(name: string) {
//     this._name = name;
//   }
// }

// const person3 = new Person3("dell");
// console.log(person3.name);
// person3.name = "lee";

class Demo {
  private static instance: Demo;
  private constructor(public name: string) {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Demo("dell");
    }
    return this.instance;
  }
}

const demo1 = Demo.getInstance();
