/*
 * @Author: zzj
 * @Date: 2021-02-24 15:45:19
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-24 16:12:04
 * @Description:
 */
// 普通方法，target对应的是类的prototype
// 静态方法，target对应的是类的构造函数
function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  // console.log(target);
  // console.log(key);
  // descriptor.writable = true;
  descriptor.value = function () {
    return "abc";
  };
}
class Test2 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName() {
    return this.name;
  }
}

const test2 = new Test2("dell");
// test2.getName = () => {
//   return "123";
// };
console.log(test2.getName());
