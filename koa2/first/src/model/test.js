/*
 * @Author: zzj
 * @Date: 2020-11-04 22:21:17
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-04 22:25:11
 * @Description:
 */
import mongoose from "../config/DBHelper";

const Schema = mongoose.Schema;

const TestSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  email: { type: String },
});

const TestModel = mongoose.model("users", TestSchema);

export default TestModel;
