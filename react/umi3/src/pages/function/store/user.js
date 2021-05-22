/*
 * @Author: zzj
 * @Date: 2021-05-22 17:22:43
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-22 17:44:15
 * @Description:
 */
import React, { useState, useEffect } from 'react';
import { useStoreHook, useStateHook, useDispatchHook } from 'think-react-store';

export default function (props) {
  const [state, setState] = useState();
  const {
    user: { id, username, getUserAsync },
  } = useStoreHook();

  const states = useStateHook('user');
  // console.log('states', states);

  const dispatch = useDispatchHook();

  useEffect(() => {
    getUserAsync({
      id: 10,
      username: 'admin',
    });
  }, []);

  const handleClick = () => {
    // getUserAsync({
    //   id: 20,
    //   username: 'admin2',
    // });
    dispatch({
      key: 'user',
      type: 'getUserAsync',
      payload: {
        id: 20,
        username: 'admin2',
      },
    });
  };

  return (
    <div>
      user-id:{id}
      <br></br>
      user-name:{username}
      <br></br>
      <button onClick={handleClick}>修改</button>
    </div>
  );
}
