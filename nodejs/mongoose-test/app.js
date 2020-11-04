/*
 * @Author: zzj
 * @Date: 2020-11-04 14:48:25
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-04 15:02:45
 * @Description:
 */
const mongoose = require("mongoose");

mongoose.connect("mongodb://test:123456@ip:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("users", {
  name: String,
  age: Number,
  email: String,
});

const test = new User({ name: "test4", age: 22, email: "test@qq.com" });

test.save().then(() => {
  console.log("save ok");
});
