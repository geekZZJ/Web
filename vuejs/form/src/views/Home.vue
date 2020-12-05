<!--
 * @Author: 张中俊
 * @Date: 2020-10-15 20:07:14
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-05 14:57:39
 * @Description: 
-->
<template>
  <div class="home">
    <h3>具有数据校验功能的表单组件——Form</h3>
    <i-form
      :model="formValidate"
      :rules="ruleValidate"
      ref="form"
    >
      <i-form-item
        label="用户名"
        prop="name"
      >
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item
        label="邮箱"
        prop="mail"
      >
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
      <i-form-item label="爱好">
        <i-checkbox>游泳</i-checkbox>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script>
// @ is an alias to /src
import iForm from "@/components/form/form";
import iFormItem from "@/components/form/form-item";
import iInput from "@/components/input/input";
import iCheckbox from "@/components/checkbox/checkbox.vue";

export default {
  name: "Home",
  components: {
    iForm,
    iFormItem,
    iInput,
    iCheckbox,
  },
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
      },
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不正确", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          window.alert("提交成功");
        } else {
          window.alert("表单校验失败");
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    },
  },
};
</script>
