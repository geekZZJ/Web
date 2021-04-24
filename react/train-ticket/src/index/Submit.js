/*
 * @Author: zzj
 * @Date: 2021-04-04 12:35:27
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-24 14:00:28
 * @Description:
 */
import React, { memo } from "react";
import "./Submit.css";

export default memo(function Submit(props) {
  return (
    <div className="submit">
      <button type="submit" className="submit-button">
        搜索
      </button>
    </div>
  );
});
