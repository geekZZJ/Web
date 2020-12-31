/*
 * @Author: zzj
 * @Date: 2020-12-24 11:10:16
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-24 15:10:38
 * @Description:联合类型和类型保护
 */

interface Bird {
  fly: Boolean;
  sing: () => {};
}

interface Dog {
  fly: Boolean;
  bark: () => {};
}

// 类型断言的方式
function trainAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}

// in语法做类型保护
function trainAnimal2(animal: Bird | Dog) {
  if ("sing" in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

// typeof类型保护
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}

class NumberObj {
  count: number;
}

// instanceof类型保护
function add2(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
