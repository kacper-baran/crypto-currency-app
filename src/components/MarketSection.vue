<template>
  <section id="market">
    <div class="wrapper">
      <h2 class="heading">Market</h2>
      <CoinList :coins="coins" :key="key"></CoinList>
      <PageControls :current-page="page" @activePage="activePage"></PageControls>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CoinList from './market/CoinList.vue'
import PageControls from './market/PageControls.vue'
const page = ref('1')
const coins = ref(null)
const key = ref(0)

const activePage = (value) => {
  page.value = value
  key.value++
  getCoins()
}

const getCoins = async () => {
  const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=${page.value}&sparkline=false&locale=en`
  const res = await fetch(URL, { crossDomain: true })
  const resData = await res.json()
  coins.value = resData
}
getCoins()
</script>

<style scoped>
h2 {
  font-size: var(--font-size-5);
  text-align: center;
  padding-bottom: var(--space-l);
  margin-inline: auto;
}

.controls {
  text-align: center;
  margin-top: var(--space-s-m);
}
.wrapper {
  max-width: 1500px;
}
</style>
