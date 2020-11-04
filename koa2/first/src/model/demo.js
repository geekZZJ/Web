/*
 * @Author: zzj
 * @Date: 2020-11-04 22:27:22
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-04 22:39:59
 * @Description:
 */
import User from "./test";

// 增
const user = {
  name: "test4",
  age: 25,
  email: "test4@qq.com",
};

const run = async () => {
  const data = new User(user);
  const result = await data.save();
  console.log("result", result);
};

// 删
const run3 = async () => {
  const result = await User.deleteOne({ name: "test3" });
  console.log("result", result);
};

// 改
const run2 = async () => {
  const result = await User.updateOne({ name: "test3" }, { email: "zzj" });
  console.log("result", result);
};

// 查
const run1 = async () => {
  const result = await User.find();
  console.log("result", result);
};

run3();
