<template>
  <div>{{ count }}</div>
  <div>{{ double }}</div>
  <div>{{ greeting }}</div>
  <h1>x:{{ x }} y:{{ y }}</h1>
  <button @click="increase">+1</button>
  <button @click="updateGreeting">欢迎</button>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  reactive,
  toRefs,
  onUpdated,
  onRenderTriggered,
  watch,
} from "vue";
import useMousePos from "./hooks/useMousePos";

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

    onUpdated(() => {
      console.log("updated");
    });
    onRenderTriggered((event) => {
      console.log(event);
    });

    const data: DataProps = reactive({
      count: 0,
      increase: () => {
        data.count++;
      },
      double: computed(() => {
        return data.count * 2;
      }),
    });
    const { x, y } = useMousePos();
    const greeting = ref("");
    const updateGreeting = () => {
      greeting.value += "hello";
    };

    watch([greeting, () => data.count], (newVal, oldVal) => {
      console.log(newVal, oldVal);
      document.title = greeting.value + data.count;
    });
    const refData = toRefs(data);
    return {
      ...refData, 
      greeting,
      updateGreeting,
      x,
      y,
    };
  },
});
</script>

<style></style>
