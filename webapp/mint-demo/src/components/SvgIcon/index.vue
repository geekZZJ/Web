<!--
 * @Author: zzj
 * @Date: 2021-03-31 15:04:03
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-01 10:52:55
 * @Description: 
-->
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="symbolName" />
  </svg>
</template>

<script>
const req = require.context("@/assets/icons/svg", false, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);

export default {
  name: "svg-icon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
  computed: {
    symbolName() {
      return `#icon-${this.icon}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      } else {
        return "svg-icon";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1rem;
  height: 1rem;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
}
</style>