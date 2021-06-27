/*
 * @Author: zzj
 * @Date: 2021-05-19 21:40:56
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-27 11:31:12
 * @Description:
 */
import { useState, useEffect } from 'react';
import { Http } from '@/utils';

export default function useHttpHook({
  url,
  method = 'post',
  headers = {},
  body = {},
  watch = [],
}) {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Http({
      url,
      method,
      headers,
      body,
      setResult,
      setLoading,
    });
  }, watch);

  return [result, loading];
}
