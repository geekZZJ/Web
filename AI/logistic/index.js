/*
 * @Author: zzj
 * @Date: 2020-11-01 15:35:56
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-07 12:45:28
 * @Description:
 */
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";

import { getData } from "./data";

window.model = tf.sequential();

window.onload = async () => {
  const data = getData(400);

  tfvis.render.scatterplot(
    { name: "逻辑回归训练数据" },
    {
      values: [
        data.filter((p) => p.label === 1),
        data.filter((p) => p.label === 0),
      ],
    }
  );

  model.add(
    tf.layers.dense({ units: 1, inputShape: [2], activation: "sigmoid" })
  );
  model.compile({ loss: tf.losses.logLoss, optimizer: tf.train.adam(0.1) });

  const inputs = tf.tensor(data.map((p) => [p.x, p.y]));
  const labels = tf.tensor(data.map((p) => p.label));
  await model.fit(inputs, labels, {
    batchSize: 40,
    epochs: 50,
    callbacks: tfvis.show.fitCallbacks({ name: "训练过程" }, ["loss"]),
  });
};

window.predict = () => {
  const x = document.getElementById("x");
  const y = document.getElementById("y");
  const pred = model.predict(tf.tensor([[x.value * 1, y.value * 1]]));
  alert(`预测结果，${pred.dataSync()[0]}`);
};
