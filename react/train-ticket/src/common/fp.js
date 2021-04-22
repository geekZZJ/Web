/*
 * @Author: zzj
 * @Date: 2021-04-22 22:04:48
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-22 22:05:02
 * @Description:
 */
export function h0(timestamp = Date.now()) {
  const target = new Date(timestamp);

  target.setHours(0);
  target.setMinutes(0);
  target.setSeconds(0);
  target.setMilliseconds(0);

  return target.getTime();
}
