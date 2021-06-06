/*
 * @Author: zzj
 * @Date: 2021-06-02 21:56:25
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-06 14:34:48
 * @Description:
 */
// alert("user");

function login() {
  fetch("/user/login", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: "admin",
      pwd: "admin",
    }),
  }).then(() => {
    location.reload();
  });
}

function logout() {
  fetch("/user/logout", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({}),
  }).then(() => {
    location.reload();
  });
}
