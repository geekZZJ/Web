<template>
  <teleport to="#modal">
    <div class="center" v-if="isOpen">
      <slot>this is a modal</slot>
      <button @click="buttonClick">关闭modal</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "IModal",
  props: {
    isOpen: Boolean,
  },
  emits: {
    "close-modal": null,
  },
  setup(props, { emit }) {
    const buttonClick = () => {
      emit("close-modal");
    };
    return {
      buttonClick,
    };
  },
});
</script>

<style>
.center {
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 200px;
  background: grey;
  transform: translate(-50%, -50%);
}
</style>
