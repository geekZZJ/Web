<template>
  <h1>{{result}}</h1>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AsyncShow",
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve({
          result: 42,
        });
      }, 3000);
    });
  },
});
</script>

<style></style>
