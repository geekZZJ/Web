/*
 * @Author: zzj
 * @Date: 2021-01-18 21:36:21
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-18 21:58:40
 * @Description:类的装饰器
 * 装饰器通过@来使用,类装饰器接受的参数是构造函数
 */
function testDecorator(flag: Boolean) {
  if (flag) {
    return function (constructor: any) {
      constructor.prototype.getName = () => {
        console.log(123456);
      };
    };
  } else {
    return function (constructor: any) {};
  }
}

@testDecorator(true)
class Test {}

const test = new Test();
(test as any).getName();
