/*
 * @Author: zzj
 * @Date: 2020-05-30 10:22:19
 * @LastEditTime: 2020-05-30 10:27:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AId:\HTML\interview\事件\event.js
 */

function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, (event) => {
    const target = event.target
    if (selector) {
      //代理绑定
      if (target.matches(selector)) {
        fn.call(target, event)
      }
    } else {
      //普通绑定
      fn.call(target, event)
    }
  })
}
