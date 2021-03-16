/*
 * @Author: zzj
 * @Date: 2021-03-14 16:22:23
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-16 11:40:51
 * @Description:
 */
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        test
      </button>
    </div>
  );
}

export default App;
