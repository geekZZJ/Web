/*
 * @Author: zzj
 * @Date: 2021-04-04 12:32:30
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-21 21:33:53
 * @Description:
 */
import React, { useMemo } from "react";
import "./DepartDate.css";
import dayjs from "dayjs";
import PropTypes from "prop-types";

export default function DepartDate(props) {
  const { time, onClick } = props;
  const departDateString = useMemo(() => {
    return dayjs(time).format("YYYY-MM-DD");
  }, [time]);
  return (
    <div className="depart-date" onClick={onClick}>
      <input type="hidden" name="date" value={departDateString}></input>
      {departDateString}
    </div>
  );
}

DepartDate.propTypes = {
  time: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
