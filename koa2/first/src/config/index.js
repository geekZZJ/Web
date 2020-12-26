/*
 * @Author: zzj
 * @Date: 2020-11-04 15:17:41
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-26 16:28:56
 * @Description:
 */
import path from "path";

const DB_URL = "mongodb://test:123456@114.55.102.168:27017/test";
const REDIS = {
  host: "114.55.102.168",
  port: "15001",
  password: "123456",
};
const JWT_SECRET = "123456";
const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8080";

const uploadPath =
  process.env.NODE_ENV === "production"
    ? "/app/public"
    : path.join(path.resolve(__dirname), "../../public");

export default { DB_URL, REDIS, JWT_SECRET, baseUrl, uploadPath };
