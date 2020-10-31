<!--
 * @Author: 张中俊
 * @Date: 2020-10-17 11:06:26
 * @LastEditors: zzj
 * @LastEditTime: 2020-10-19 11:28:25
 * @Description: 
-->
<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Emitter from "@/mixins/emitter";
import AsyncValidator from "async-validator";

export default {
  name: "iFormItem",
  mixins: [Emitter],
  components: {},
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  inject: ["form"],
  data() {
    return {
      validateState: "", // 校验状态
      validateMessage: "", // 校验不通过时的提示信息
    };
  },
  computed: {
    // 从 Form 的 model 中动态得到当前表单组件的数据
    fieldValue() {
      return this.form.model[this.prop];
    },
  },
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch("iForm", "on-form-item-add", this);
      this.setRules();
    }
  },
  methods: {
    setRules() {
      this.$on("on-form-blur", this.onFieldBlur);
      this.$on("on-form-change", this.onFieldChange);
    },
    // 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
    getRules() {
      let formRules = this.form.rules;
      formRules = formRules ? formRules[this.prop] : [];
      return [].concat(formRules || []);
    },
    // 只支持 blur 和 change，所以过滤出符合要求的 rule 规则
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        (rule) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1
      );
    },
    /**
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validate(trigger, callback = function () {}) {
      let rules = this.getFilteredRule(trigger);
      console.log("rules", rules);
      if (!rules || rules.length === 0) {
        return true;
      }
      // 设置状态为校验中
      this.validateState = "validating";
      // 以下为 async-validator 库的调用方法
      let descriptor = {};
      descriptor[this.prop] = rules;
      console.log("descriptor", descriptor);
      const validator = new AsyncValidator(descriptor);
      let model = {};
      model[this.prop] = this.fieldValue;
      validator.validate(model, { firstFields: true }, (errors) => {
        this.validateState = !errors ? "success" : "error";
        this.validateMessage = errors ? errors[0].message : "";
        callback(this.validateMessage);
      });
    },
    /**
     * 失去焦点触发函数
     */
    onFieldBlur() {
      this.validate("blur");
    },
    /**
     * 内容改变触发函数
     */
    onFieldChange() {
      this.validate("change");
    },
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch("iForm", "on-form-item-remove", this);
  },
};
</script>
<style lang='scss' scoped>
</style>