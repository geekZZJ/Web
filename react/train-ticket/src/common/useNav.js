/*
 * @Author: zzj
 * @Date: 2021-05-07 21:54:42
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-07 21:57:45
 * @Description:
 */
import { useCallback } from "react";
import { h0 } from "./fp";

export default function useNav(departDate, dispatch, prevDate, nextDate) {
  const isPrevDisabled = h0(departDate) <= h0();
  const isNextDisabled = h0(departDate) - h0() > 20 * 86400 * 1000;

  const prev = useCallback(() => {
    if (isPrevDisabled) {
      return;
    }
    dispatch(prevDate());
    // eslint-disable-next-line
  }, [isPrevDisabled]);

  const next = useCallback(() => {
    if (isNextDisabled) {
      return;
    }
    dispatch(nextDate());
    // eslint-disable-next-line
  }, [isNextDisabled]);

  return {
    isPrevDisabled,
    isNextDisabled,
    prev,
    next,
  };
}
