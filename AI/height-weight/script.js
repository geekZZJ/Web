/**
 * @name: script
 * @author: 张中俊
 * @date: 2020/5/28 21:19
 * @description：script
 * @update: 2020/5/28 21:19
 */
import * as tf from "@tensorflow/tfjs"
import * as tfvis from "@tensorflow/tfjs-vis"

window.onload = async () => {
  const heights = [150, 160, 170]
  const weights = [40, 50, 60]

  tfvis.render.scatterplot(
    {name: "身高体重训练数据"},
    {values: heights.map((x, i) => ({x, y: weights[i]}))},
    {
      xAxisDomain: [140, 180],
      yAxisDomain: [30, 70]
    }
  )

  const inputs = tf.tensor(heights).sub(150).div(20)
  inputs.print()
  const labels = tf.tensor(weights).sub(40).div(20)
  labels.print()

  const model = tf.sequential()
  model.add(tf.layers.dense({units: 1, inputShape: [1]}))
  model.compile({loss: tf.losses.meanSquaredError, optimizer: tf.train.sgd(0.1)})

  await model.fit(inputs, labels, {
    batchSize: 3,
    epochs: 100,
    callbacks: tfvis.show.fitCallbacks({name: "训练过程"}, ["loss"])
  })

  const output = model.predict(tf.tensor([180]).sub(150).div(20))
  output.print()
  console.log(output.mul(20).add(40).dataSync()[0])
}