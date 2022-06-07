<template>
  <div>{{ count }}</div>
  <div>{{ double }}</div>
  <button @click="increase">+1</button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const count = ref(0);
    const double = computed(() => {
      return count.value * 2;
    });
    const increase = () => count.value++;
    return {
      count,
      increase,
      double
    };
  },
});
</script>

<style></style>
