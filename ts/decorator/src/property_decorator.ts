/*
 * @Author: zzj
 * @Date: 2021-02-24 16:20:02
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-24 16:26:30
 * @Description:property_decorator
 */

function nameDecorator(target: any, key: string): any {
  const descriptor: PropertyDescriptor = {
    writable: false,
  };
  return descriptor;
}

class Test3 {
  @nameDecorator
  name = "dell";
}

const test3 = new Test3();
test3.name = "123";
