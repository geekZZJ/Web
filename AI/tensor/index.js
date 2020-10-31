/*
 * @Author: zzj
 * @Date: 2020-10-31 17:48:26
 * @LastEditors: zzj
 * @LastEditTime: 2020-10-31 18:15:25
 * @Description:
 */
import * as tf from "@tensorflow/tfjs";

/**const t0 = tf.tensor(1);
t0.print();
console.log("t0", t0);

const t1 = tf.tensor([1, 2]);
t1.print();
console.log("t1", t1);

const t2 = tf.tensor([
  [1, 2],
  [3, 4],
]);
t2.print();
console.log("t2", t2);

const t3 = tf.tensor([[[1]]]);
t3.print();
console.log("t3", t3);**/

// 传统for循环
const input = [1, 2, 3, 4];
const w = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
];
const output = [0, 0, 0, 0];
for (let i = 0; i < w.length; i++) {
  for (let j = 0; j < input.length; j++) {
    output[i] += input[j] * w[i][j];
  }
}
console.log("output", output);

tf.tensor(w).dot(tf.tensor(input)).print();
