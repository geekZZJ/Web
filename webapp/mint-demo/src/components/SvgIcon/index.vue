<!--
 * @Author: zzj
 * @Date: 2021-03-31 15:04:03
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-31 15:28:23
 * @Description: 
-->
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="symbolName" />
  </svg>
</template>

<script>
export default {
  name: "Index",
  props: {
    icon: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      default: "",
    },
  },
  computed: {
    symbolName() {
      return `#icon-${this.icon}`;
    },
    svgClass() {
      if (this.class) {
        return `svg-icon ${this.class}`;
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