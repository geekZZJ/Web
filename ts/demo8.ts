/*
 * @Author: zzj
 * @Date: 2020-12-09 22:29:24
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-09 22:36:22
 * @Description:
 */
class Person1 {
  name = "dell";
  getName() {
    return this.name;
  }
}

class Teacher extends Person1 {
  getTeacherName() {
    return "teacher";
  }
  getName() {
    return super.getName() + " lee";
  }
}

// const person1 = new Person1();
// console.log(person1.getName());
const teacher1 = new Teacher();
console.log(teacher1.getName());
console.log(teacher1.getTeacherName());
