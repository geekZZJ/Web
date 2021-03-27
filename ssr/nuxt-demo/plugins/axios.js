/*
 * @Author: zzj
 * @Date: 2021-03-27 18:11:26
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-27 18:12:45
 * @Description:
 */
export default function ({ $axios, redirect }) {
  $axios.onError((error) => {
    if (error.response.status === 500) {
      redirect('/sorry')
    }
  })
}
