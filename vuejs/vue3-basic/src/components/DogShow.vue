<template>
  <img :src="result&&result.message" alt="">
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios"

export default defineComponent({
  name: "DogShow",
  async setup(){
    const rawData = await axios.get("https://dog.ceo/api/breeds/image/random");
    return {
      result: rawData.data,
    }
  }
})
</script>

<style>

</style>