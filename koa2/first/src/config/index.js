/*
 * @Author: zzj
 * @Date: 2020-11-04 15:17:41
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-11 10:47:34
 * @Description:
 */
const DB_URL = "mongodb://test:123456@114.55.102.168:27017/test";
const REDIS = {
  host: "114.55.102.168",
  port: "15001",
  password: "123456",
};
const JWT_SECRET = "123456";

export default { DB_URL, REDIS, JWT_SECRET };
