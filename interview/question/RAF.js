/*
 * @Author: zzj
 * @Date: 2020-06-02 23:19:00
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-20 15:03:04
 * @Description:
 */

// 3s把宽度从100px变成640px，即宽度增加540px
// 60帧/s，3s180帧，每次变化3px

let curWidth = 100;
const maxWidth = 640;
const div1 = document.getElementById("div1");

// function animate() {
//   curWidth += 3;
//   div1.style.width = curWidth + "px";
//   if (curWidth < maxWidth) {
//     setTimeout(animate, 16.7); //自己控制时间
//   }
// }

// RAF
function animate() {
  curWidth += 3;
  div1.style.width = curWidth + "px";
  if (curWidth < maxWidth) {
    window.requestAnimationFrame(animate); //时间不用自己控制
  }
}

animate();
