/*
 * @Author: zzj
 * @Date: 2020-11-04 22:11:43
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-11 10:49:01
 * @Description:
 */
import mongoose from "mongoose";
import config from "./index";

/**
 * 创建连接
 */
mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;

/**
 * 连接成功
 */
conn.on("connected", () => {
  console.log("mongoose connection open to" + config.DB_URL);
});

/**
 * 连接失败
 */
conn.on("error", (err) => {
  console.log(`mongoose connection error ${err}`);
});

/**
 * 断开连接
 */
conn.on("disconnected", () => {
  console.log("mongoose connection disconnected");
});

export default mongoose;
