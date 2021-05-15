/*
 * @Author: zzj
 * @Date: 2021-05-15 15:57:23
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-15 16:17:30
 * @Description:
 */
export function getLists(value) {
  return fetch(`/api/getListsAsync?value=${value}`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });
}
