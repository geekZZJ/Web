<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-body></detail-body>
  </div>
</template>

<script>
import DetailHeader from '@/components/DetailHeader'
import DetailBody from '@/components/DetailBody'
export default {
  components: {
    DetailHeader,
    DetailBody
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
</style>
