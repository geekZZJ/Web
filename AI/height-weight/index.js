/*
 * @Author: zzj
 * @Date: 2020-11-01 14:46:58
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-01 15:17:01
 * @Description:
 */
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";

window.onload = async () => {
  const heights = [150, 160, 170];
  const weights = [40, 50, 60];

  tfvis.render.scatterplot(
    { name: "身高体重训练数据" },
    { values: heights.map((x, i) => ({ x, y: weights[i] })) },
    { xAxisDomain: [140, 180], yAxisDomain: [30, 70] }
  );

  const inputs = tf.tensor(heights).sub(150).div(20);
  const labels = tf.tensor(weights).sub(40).div(20);

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  model.compile({
    loss: tf.losses.meanSquaredError,
    optimizer: tf.train.sgd(0.1),
  });

  await model.fit(inputs, labels, {
    batchSize: 3,
    epochs: 200,
    callbacks: tfvis.show.fitCallbacks({ name: "训练过程" }, ["loss"]),
  });

  const output = model.predict(tf.tensor([180]).sub(150).div(20));
  console.log(output.mul(20).add(40).dataSync());
};
