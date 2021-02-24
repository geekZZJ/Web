/*
 * @Author: zzj
 * @Date: 2021-02-24 16:33:51
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-24 16:48:11
 * @Description:
 */
const userInfo: any = undefined;

function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (error) {
        console.log(`${msg}不存在`);
      }
    };
  };
}

class Test4 {
  @catchError("userInfo.name")
  getName() {
    return userInfo.name;
  }
  @catchError("userInfo.age")
  getAge() {
    return userInfo.age;
  }
}

const test4 = new Test4();
test4.getName();
