/*
 * @Author: zzj
 * @Date: 2021-05-22 17:02:29
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-22 17:46:00
 * @Description:
 */
import React, { useState, useEffect } from 'react';
import { StoreProvider } from 'think-react-store';
import * as store from './stores';
import User from './user';
import log from 'think-react-store/middlewares/log';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <StoreProvider store={store} middleware={[log]}>
      <User></User>
    </StoreProvider>
  );
}
