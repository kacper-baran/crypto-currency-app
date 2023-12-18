<template>
  <div class="container" v-if="coins">
    <div class="coin-card" v-for="coin in props.coins" :key="coin">
      <router-link class="coin-link" :to="'/' + coin.id"></router-link>
      <img :src="coin.image" :alt="coin.name" />
      <div class="card-header">
        <h3>
          {{ coin.name }}
        </h3>
        <div>{{ coin.current_price }} $</div>
      </div>
      <div class="card-body">
        <div>
          Market cap:
          <div>{{ numberWithSpaces(coin.market_cap) }} $</div>
        </div>
        <div
          :class="[
            { green: coin.price_change_percentage_24h > 0 },
            { red: coin.price_change_percentage_24h < 0 }
          ]"
        >
          {{ coin.price_change_percentage_24h }}%
        </div>
      </div>
    </div>
  </div>
  <div v-else class="error">Failed to fetch. Try again later.</div>
</template>

<script setup>
const props = defineProps(['coins'])
console.log(props.coins)
function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
</script>

<style scoped>
.container {
  display: grid;
  gap: var(--space-xs);
  grid-template-columns: repeat(auto-fit, minmax(min(275px, 100%), 1fr));
}

.coin-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-s);
  align-items: center;
  min-height: 300px;
  border: 2px solid;
  border-color: var(--c-cyan);
  border-radius: 7px;
  background-color: var(--c-blue-transparent);
  padding: var(--space-s-m);
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.coin-card:hover {
  box-shadow: 0 0 20px 0px var(--c-cyan);
}
.coin-card:hover img {
  scale: 1.1;
}
.coin-link {
  position: absolute;
  inset: 0;
}
.card-header,
.card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-m);
  width: 100%;
  text-align: center;
  font-size: var(--font-size-2);
}
.green {
  color: lime;
}
.red {
  color: red;
}

img {
  height: 35%;
  border-radius: 8px;
  transition: scale 0.3s;
}

.error {
  text-align: center;
}

@media (min-width: 768px) {
  .coin-card {
    min-height: 350px;
  }
  .card-header,
  .card-body {
    font-size: var(--font-size-1);
  }
}
</style>
