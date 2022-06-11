<template>
  <div>{{ count }}</div>
  <div>{{ double }}</div>
  <div>{{ greeting }}</div>
  <p>{{error}}</p>
  <Suspense>
    <template #default>
      <!-- <AsyncShow /> -->
      <DogShow></DogShow>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
  <h1>x:{{ x }} y:{{ y }}</h1>
  <h1 v-if="loading">loading...</h1>
  <img v-if="loaded" :src="result[0].url" alt="" />
  <button @click="increase">+1</button>
  <button @click="updateGreeting">欢迎</button>
  <Modal :is-open="modalIsOpen" @close-modal="onModalClose">My Modal</Modal>
  <button @click="openModal">打开modal</button>
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
  onErrorCaptured,
} from "vue";
import useMousePos from "./hooks/useMousePos";
import useUrlLoader from "./hooks/useUrlLoader";
import Modal from "./components/Modal.vue";
// import AsyncShow from "./components/AsyncShow.vue";
import DogShow from "./components/DogShow.vue";

interface DataProps {
  count: number;
  double: number;
  increase: () => void;
}

interface DogResult {
  message: string;
  status: string;
}

interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default defineComponent({
  name: "App",
  components: {
    Modal,
    // AsyncShow,
    DogShow,
  },
  setup() {
    // const count = ref(0);
    // const double = computed(() => {
    //   return count.value * 2;
    // });
    // const increase = () => count.value++;

    const error = ref(null);
    onErrorCaptured((e: any) => {
      error.value = e;
      return true;
    });
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
    const { result, loaded, loading } = useUrlLoader<CatResult[]>(
      "https://api.thecatapi.com/v1/images/search?limit=1"
    );
    watch(result, () => {
      if (result.value) {
        console.log("value", result.value[0].url);
      }
    });
    const greeting = ref("");
    const updateGreeting = () => {
      greeting.value += "hello";
    };

    watch([greeting, () => data.count], (newVal, oldVal) => {
      console.log(newVal, oldVal);
      document.title = greeting.value + data.count;
    });
    const refData = toRefs(data);
    const modalIsOpen = ref(false);
    const openModal = () => {
      modalIsOpen.value = true;
    };
    const onModalClose = () => {
      modalIsOpen.value = false;
    };
    return {
      ...refData,
      greeting,
      updateGreeting,
      x,
      y,
      result,
      loaded,
      loading,
      modalIsOpen,
      openModal,
      onModalClose,
      error
    };
  },
});
</script>
