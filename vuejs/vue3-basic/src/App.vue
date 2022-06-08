<template>
  <div>{{ count }}</div>
  <div>{{ double }}</div>
  <button @click="increase">+1</button>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, toRefs } from "vue";
interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}

export default defineComponent({
  name: "App",
  setup() {
    // const count = ref(0);
    // const double = computed(() => {
    //   return count.value * 2;
    // });
    // const increase = () => count.value++;
    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => {
        return data.count * 2;
      }),
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>

<style></style>
