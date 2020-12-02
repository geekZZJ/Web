/*
 * @Author: zzj
 * @Date: 2020-12-02 14:49:54
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-02 14:59:17
 * @Description:ts能够自动分析变量类型，我们就什么都不用做了，如果无法分析变量的类型，我们就需要使用类型注解
 */
// 类型注解  告诉ts变量是什么类型
let counts: number;
counts = 123;

// 类型推断  ts自动尝试分析变量的类型
let countInference = 123;

// const firstNum = 1;
// const secondNum = 2;

// const total = firstNum + secondNum;

function getTotal(firstNum: number, secondNum: number) {
  return firstNum + secondNum;
}

const total = getTotal(1, 2);
