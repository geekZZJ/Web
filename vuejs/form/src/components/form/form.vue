<!--
 * @Author: 张中俊
 * @Date: 2020-10-17 11:06:12
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-06 15:17:12
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
  provide() {
    return {
      form: this,
    };
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
    this.$on("on-form-item-add", (field) => {
      if (field) this.fields.push(field);
    });
    this.$on("on-form-item-remove", (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
    });
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    // 公开方法：全部重置数据
    resetFields() {
      this.fields.forEach((field) => {
        console.log("field", field);
        field.resetField();
      });
    },
    // 公开方法：全部校验数据，支持 Promise
    validate(callback) {
      return new Promise((resolve) => {
        let valid = true;
        let count = 0;
        this.fields.forEach((field) => {
          field.validate("", (errors) => {
            if (errors) {
              valid = false;
            }
            if (++count === this.fields.length) {
              // 全部完成
              resolve(valid);
              if (typeof callback === "function") {
                callback(valid);
              }
            }
          });
        });
      });
    },
  },
};
</script>
<style lang='scss' scoped>
</style>