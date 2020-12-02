/*
 * @Author: zzj
 * @Date: 2020-12-02 15:09:42
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-02 15:19:22
 * @Description:
 */
function add(firstNum: number, secondNum: number): number {
  return firstNum + secondNum;
}

// const total = add(1, 2);

// 无返回值的函数
function sayHello(): void {
  console.log("hello");
}

function errorEmit(): never {
  throw new Error();
  console.log(123);
}

function add1({ first, second }: { first: number; second: number }): number {
  return first + second;
}

const total1 = add1({ first: 1, second: 2 });
