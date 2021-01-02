/*
 * @Author: zzj
 * @Date: 2020-12-31 17:13:12
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-02 16:49:55
 * @Description:
 */
// 定义全局变量
// declare var $: (param: () => void) => void;

// 定义全局函数
interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}

// 函数重载
declare function $(readyFun: () => void): void;
declare function $(selector: string): JqueryInstance;

// 如何对对象进行类型定义，以及对类进行类型定义，以及命名空间的嵌套
declare namespace $ {
  namespace fn {
    class init {}
  }
}

// 使用interface的语法，实现函数的重载
// interface JQuery {
//   (readyFun: () => void): void;
//   (selector: string): JqueryInstance;
// }

// declare var $: JQuery;
