/*
 * @Author: zzj
 * @Date: 2020-12-24 15:18:29
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-24 17:28:29
 * @Description:枚举类型
 */
enum Status {
  OFFLINE,
  ONLINE,
  DELETED,
}

function getResult(status) {
  if (status === Status.OFFLINE) {
    return "offline";
  } else if (status === Status.ONLINE) {
    return "online";
  } else if (status === Status.DELETED) {
    return "deleted";
  }
  return "error";
}

getResult(Status.OFFLINE);
