/*
 * @Author: zzj
 * @Date: 2020-10-18 21:37:59
 * @LastEditors: zzj
 * @LastEditTime: 2020-10-18 21:53:43
 * @Description:
 */
import axios from "axios";

const getCode = async () => {
  let result = "";
  try {
    result = await axios.get("/getCaptcha");
    if (result.status === 200) {
      return result.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getCode };
