<!--
 * @Author: 张中俊
 * @Date: 2020-10-15 20:07:14
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 11:26:42
 * @Description: 
-->
<template>
  <div class="home">
    <i-form
      :model="formValidate"
      :rules="ruleValidate"
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
    </i-form>
  </div>
</template>

<script>
// @ is an alias to /src
import iForm from "@/components/form/form";
import iFormItem from "@/components/form/form-item";
import iInput from "@/components/input/input";

export default {
  name: "Home",
  components: {
    iForm,
    iFormItem,
    iInput,
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
};
</script>
