<!--
 * @Author: 张中俊
 * @Date: 2020-10-17 11:06:12
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 11:42:28
 * @Description: 
-->
<template>
  <form>
    <slot></slot>
  </form>

</template>

<script>
export default {
  name: "iForm",
  components: {},
  props: {
    model: {
      type: Object,
      default: () => {},
    },
    rules: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      fields: [],
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log(this);
    this.$on("on-form-item-add", (field) => {
      if (field) this.fields.push(field);
    });
    this.$on("on-form-item-remove", (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>