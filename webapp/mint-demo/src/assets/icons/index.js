/*
 * @Author: zzj
 * @Date: 2021-03-30 17:13:08
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-30 17:14:05
 * @Description:
 */
import Vue from "vue";
import SvgIcon from "@/components/SvgIcon";

// register globally
Vue.component("svg-icon", SvgIcon);

const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);
