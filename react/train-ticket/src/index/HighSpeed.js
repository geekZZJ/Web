/*
 * @Author: zzj
 * @Date: 2021-04-04 12:34:04
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-24 13:01:09
 * @Description:
 */
import React from "react";
import "./HighSpeed.css";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function HighSpeed(props) {
  const { highSpeed, toggle } = props;
  return (
    <div className="high-speed">
      <div className="high-speed-label">只看高铁/动车</div>
      <div className="high-speed-switch" onClick={() => toggle()}>
        <input type="hidden" name="highSpeed" value={highSpeed}></input>
        <div className={classNames("high-speed-track", { checked: highSpeed })}>
          <span
            className={classNames("high-speed-handle", { checked: highSpeed })}
          ></span>
        </div>
      </div>
    </div>
  );
}

HighSpeed.propTypes = {
  highSpeed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
