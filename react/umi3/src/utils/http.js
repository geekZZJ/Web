/*
 * @Author: zzj
 * @Date: 2021-06-26 16:09:13
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-28 20:54:33
 * @Description:
 */
import { Toast } from 'antd-mobile';

export default function Http({
  url,
  method,
  headers,
  body,
  setLoading,
  setResult,
}) {
  setLoading(true);

  const defaultHeader = {
    'Content-type': 'application/json',
  };

  let params;
  if (method.toUpperCase() === 'GET') {
    params = undefined;
  } else {
    params = {
      headers: {
        ...defaultHeader,
        headers,
      },
      method,
      body: JSON.stringify(body),
    };
  }

  return new Promise((resolve, reject) => {
    fetch(`/api${url}`, params)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
          setResult(res.data);
        } else {
          Toast.fail(res.errMsg);
          reject(res.errMsg);
        }
      })
      .catch((err) => {
        Toast.fail(err);
        reject(err);
      })
      .finally(() => {
        setLoading(false);
      });
  });
}
