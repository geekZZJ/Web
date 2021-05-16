/*
 * @Author: zzj
 * @Date: 2021-05-16 17:50:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-16 22:27:40
 * @Description:
 */
import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
} from 'react';

export default function (props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('test-demo');

  async function demo() {
    console.log('demo');
  }

  useEffect(() => {
    // 异步操作
    console.log('useEffect');
    // fetch('/api/getLists');

    demo();
  }, [count]);

  useLayoutEffect(() => {
    // 执行dom操作
    console.log('useLayoutEffect');
  }, []);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  const handleClick = useCallback(() => {
    console.log('count changed');
    setCount(count + 1);
  }, [count]);

  const noCacheText = () => {
    console.log('text changed');
    return text;
  };

  const memoText = useMemo(() => {
    console.log('text changed');
    return text;
  }, [text]);

  return (
    <div>
      <h1 onClick={handleClick}>count:{count}</h1>
      {/* <h1>text:{noCacheText()}</h1> */}
      <h1>text:{memoText}</h1>
    </div>
  );
}
