<template>
  <div>
    <CoinDetails :coin-id="props.coinId"></CoinDetails>
  </div>
</template>

<script setup>
const props = defineProps(['coinId'])
import CoinDetails from '../components/market/CoinDetails.vue'
</script>

<style scoped>
div {
  min-height: 100vh;
}
</style>
