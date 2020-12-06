/*
 * @Author: zzj
 * @Date: 2020-11-10 15:10:40
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-06 16:13:55
 * @Description:
 */
import { getValue } from "../config/RedisConfig";
import config from "../config";
import jwt from "jsonwebtoken";

const getJWTPayload = (token) => {
  return jwt.verify(token.split(" ")[1], config.JWT_SECRET);
};

const checkCode = async (key, value) => {
  const redisData = await getValue(key);
  if (redisData !== null) {
    if (redisData.toLowerCase() === value.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export { checkCode, getJWTPayload };
