/*
 * @Author: zzj
 * @Date: 2020-11-20 17:27:58
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-03 10:46:32
 * @Description:
 */
import { getIrisData, IRIS_CLASSES } from "./data";
import * as tf from "@tensorflow/tfjs";
import * as tfvis from "@tensorflow/tfjs-vis";

window.onload = async () => {
  const [xTrain, yTrain, xTest, yTest] = getIrisData(0.15);

  const model = tf.sequential();
  model.add(
    tf.layers.dense({
      units: 10,
      inputShape: [xTrain.shape[1]],
      activation: "sigmoid",
    })
  );
  model.add(tf.layers.dense({ units: 3, activation: "softmax" }));

  model.compile({
    loss: "categoricalCrossentropy",
    optimizer: tf.train.adam(0.1),
    metrics: ["accuracy"],
  });

  await model.fit(xTrain, yTrain, {
    epochs: 100,
    validationData: [xTest, yTest],
    callbacks: tfvis.show.fitCallbacks(
      { name: "训练效果" },
      ["loss", "val_loss", "acc", "val_acc"],
      { callbacks: ["onEpochEnd"] }
    ),
  });
};
