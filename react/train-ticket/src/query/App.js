/*
 * @Author: zzj
 * @Date: 2021-04-03 14:52:13
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-07 22:00:07
 * @Description:
 */
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import URI from "urijs";
import "./App.css";
import useNav from "../common/useNav";

import Nav from "../common/Nav";
import List from "./List";
import Bottom from "./Bottom";
import Header from "../common/Header";

import {
  setFrom,
  setTo,
  setDepartDate,
  setHighSpeed,
  setSearchParsed,
  setTrainList,
  setTicketTypes,
  setTrainTypes,
  setDepartStations,
  setArriveStations,
  prevDate,
  nextDate,
} from "./actions";
import dayjs from "dayjs";
import { h0 } from "../common/fp";
import axios from "axios";

function App(props) {
  const {
    from,
    to,
    departDate,
    highSpeed,
    dispatch,
    searchParsed,
    orderType,
    onlyTickets,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
  } = props;
  useEffect(() => {
    const queries = URI.parseQuery(window.location.search);
    const { from, to, date, highSpeed } = queries;
    dispatch(setFrom(from));
    dispatch(setTo(to));
    dispatch(setDepartDate(h0(dayjs(date).valueOf())));
    dispatch(setHighSpeed(highSpeed === "true"));
    dispatch(setSearchParsed(true));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!searchParsed) {
      return;
    }
    const url = new URI("http://localhost:4000/rest/query")
      .setSearch("from", from)
      .setSearch("to", to)
      .setSearch("date", dayjs(departDate).format("YYYY-MM-DD"))
      .setSearch("highSpeed", highSpeed)
      .setSearch("orderType", orderType)
      .setSearch("onlyTickets", onlyTickets)
      .setSearch("checkedTicketTypes", Object.keys(checkedTicketTypes).join())
      .setSearch("checkedTrainTypes", Object.keys(checkedTrainTypes).join())
      .setSearch(
        "checkedDepartStations",
        Object.keys(checkedDepartStations).join()
      )
      .setSearch(
        "checkedArriveStations",
        Object.keys(checkedArriveStations).join()
      )
      .setSearch("departTimeStart", departTimeStart)
      .setSearch("departTimeEnd", departTimeEnd)
      .setSearch("arriveTimeStart", arriveTimeStart)
      .setSearch("arriveTimeEnd", arriveTimeEnd)
      .toString();

    async function fetchData() {
      try {
        const res = await axios.get(url);
        const {
          dataMap: {
            directTrainInfo: {
              trains,
              filter: { ticketType, trainType, depStation, arrStation },
            },
          },
        } = res.data;
        dispatch(setTrainList(trains));
        dispatch(setTicketTypes(ticketType));
        dispatch(setTrainTypes(trainType));
        dispatch(setDepartStations(depStation));
        dispatch(setArriveStations(arrStation));
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
    // eslint-disable-next-line
  }, [
    from,
    to,
    departDate,
    highSpeed,
    searchParsed,
    orderType,
    onlyTickets,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
  ]);
  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const { isPrevDisabled, isNextDisabled, prev, next } = useNav(
    departDate,
    dispatch,
    prevDate,
    nextDate
  );

  if (!searchParsed) {
    return null;
  }

  return (
    <div>
      <div className="header-wrapper">
        <Header title={`${from} - ${to}`} onBack={onBack}></Header>
      </div>
      <Nav
        date={departDate}
        isNextDisabled={isNextDisabled}
        isPrevDisabled={isPrevDisabled}
        prev={prev}
        next={next}
      ></Nav>
      <List></List>
      <Bottom></Bottom>
    </div>
  );
}

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
