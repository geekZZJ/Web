/*
 * @Author: zzj
 * @Date: 2021-05-11 21:52:54
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-20 22:14:06
 * @Description:
 */
import React from 'react';
import { ErrorBoundary, MenuBar } from '@/components';
import { useLocation } from 'umi';

function Index(props) {
  const location = useLocation();
  const paths = ['/', '/order', '/user'];

  return (
    <div>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      ></MenuBar>
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </div>
  );
}

export default Index;
