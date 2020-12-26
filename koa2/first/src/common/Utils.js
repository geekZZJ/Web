/*
 * @Author: zzj
 * @Date: 2020-11-10 15:10:40
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-26 17:08:21
 * @Description:
 */
import { getValue } from "../config/RedisConfig";
import config from "../config";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

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

const getStatus = (path) => {
  return new Promise((resolve) => {
    fs.stat(path, (err, stats) => (err ? resolve(false) : resolve(stats)));
  });
};

const mkdir = (dir) => {
  return new Promise((resolve) => {
    fs.mkdir((dir, err) => (err ? resolve(false) : resolve(true)));
  });
};

const dirExists = async (dir) => {
  const isExists = await getStatus(dir);
  if (isExists && isExists.isDirectory()) {
    return true;
  } else if (isExists) {
    // 路径存在，但是是文件
    return false;
  }
  // 如果路径不存在
  const tempDir = path.parse(dir).dir;
  // 循环遍历，递归判断上级目录不存在，则产生上级目录
  const status = await dirExists(tempDir);
  if (status) {
    return await mkdir(dir);
  } else {
    return false;
  }
};

export { checkCode, getJWTPayload, dirExists };
