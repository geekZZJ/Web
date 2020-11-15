/*
 * @Author: zzj
 * @Date: 2020-11-04 22:21:17
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-14 22:12:35
 * @Description:
 */
import mongoose from "../config/DBHelper";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  name: String,
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
