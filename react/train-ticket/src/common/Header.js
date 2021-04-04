/*
 * @Author: zzj
 * @Date: 2021-04-04 12:27:34
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-04 17:11:32
 * @Description:
 */
import React from "react";
import "./Header.css";
import PropTypes from "prop-types";

export default function Header(props) {
  const { onBack, title } = props;
  return (
    <div className="header">
      <div className="header-back" onClick={onBack}>
        <svg width="42" height="42">
          <polyline
            points="25,13,16,21,25,29"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          ></polyline>
        </svg>
      </div>
      <h1 className="header-title">{title}</h1>
    </div>
  );
}

Header.propTypes = {
  onBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
