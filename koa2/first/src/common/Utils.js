/*
 * @Author: zzj
 * @Date: 2020-11-10 15:10:40
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-10 16:55:56
 * @Description:
 */
import { getValue } from "../config/RedisConfig";
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

export { checkCode };
