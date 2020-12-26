/*
 * @Author: zzj
 * @Date: 2020-11-07 14:26:07
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-26 18:30:56
 * @Description:
 */
import { extend, localize } from "vee-validate";
import {
  required,
  email,
  min,
  max,
  length,
  confirmed,
} from "vee-validate/dist/rules";
import zh from "vee-validate/dist/locale/zh_CN.json";

extend("email", email);
extend("min", min);
extend("max", max);
extend("required", required);
extend("length", length);
extend("confirmed", confirmed);

localize("zh_CN", {
  messages: {
    ...zh.messages,
    required: "请输入{_field_}",
  },
  names: {
    email: "邮箱",
    password: "密码",
    repassword: "确认密码",
    name: "昵称",
    username: "用户名",
    vercode: "验证码",
    oldpassword: "旧密码",
  },
  fields: {
    email: {
      email: "请输入正确的{_field_}",
      required: "请输入{_field_}!!!",
    },
    name: {
      min: (field, { length }) => {
        return `请在${field}输入至少${length}个字符`;
      },
    },
    password: {
      confirmed: (field, { target }) => {
        return `两次输入的${field}不一致`;
      },
    },
  },
});
