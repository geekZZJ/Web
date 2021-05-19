/*
 * @Author: zzj
 * @Date: 2021-05-18 22:18:05
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-18 22:22:16
 * @Description:
 */
import { useLayoutEffect, useState } from 'react';

export default function useTitleHook(title) {
  const [state, setState] = useState();

  useLayoutEffect(() => {
    document.title = title;
    setState(title);
  }, [title]);

  return state;
}
