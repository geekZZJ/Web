/*
 * @Author: zzj
 * @Date: 2020-12-31 17:13:12
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-31 17:25:10
 * @Description:
 */
// 定义全局变量
// declare var $: (param: () => void) => void;

// 定义全局函数
declare function $(param: () => void): void;
declare function $(
  param: string
): {
  html: (html: string) => {};
};
