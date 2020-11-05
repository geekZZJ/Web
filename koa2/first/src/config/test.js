/*
 * @Author: zzj
 * @Date: 2020-11-05 18:42:49
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-05 18:58:51
 * @Description:
 */
import { getValue, setValue, getHValue } from "./RedisConfig";

setValue("imooc", "imooc from test");

getValue("imooc").then((res) => {
  console.log("res", res);
});

setValue("imoocObj", { name: "test", age: 26 });

getHValue("imoocObj").then((res) => {
  console.log("obj", res);
});
