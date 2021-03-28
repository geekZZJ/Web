/*
 * @Author: zzj
 * @Date: 2021-03-27 22:10:24
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-27 22:11:55
 * @Description:
 */
export default function({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 500) {
      redirect("/sorry");
    }
  });
}
