<template>
  <div v-if="coin" class="wrapper">
    <div class="info">
      <div class="image">
        <img :src="coin.image.large" alt="crypto coin icon" />
        <div>{{ coin.name }}</div>
        <div>Rank: #{{ coin.market_cap_rank }}</div>
      </div>
      <div class="text">
        <div class="description" v-if="coin.description.en" v-html="coin.description.en"></div>
        <div v-else>Description is not available for this coin</div>
        <div class="stats">
          <div>
            24h change:
            <span
              :class="[
                { green: coin.market_data.market_cap_change_percentage_24h > 0 },
                { red: coin.market_data.market_cap_change_percentage_24h < 0 }
              ]"
            >
              {{ coin.market_data.market_cap_change_percentage_24h }}%
            </span>
          </div>
          <span> Symbol: {{ coin.symbol }} </span>
          <span> Symbol: {{ coin.market_data.current_price.usd }} USD </span>
        </div>
      </div>
    </div>
    <div class="chart" v-if="coinHistory">
      <h3>30 day price change USD</h3>
      <Line id="my-chart-id" :options="chartOptions" :data="chartData" :chartColors="chartColors" />
    </div>
  </div>
  <div v-else>Failed to fetch. Try again later.</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip)

const props = defineProps(['coinId'])

const coin = ref(null)

const getCoin = async () => {
  const URL = `https://api.coingecko.com/api/v3/coins/${props.coinId}`
  const res = await fetch(URL)
  const resData = await res.json()
  coin.value = resData
}

watch(coin, () => {
  console.log(coin.value)
})

getCoin()
let prices = []
let timestamps = []
const coinHistory = ref(null)
const getCoinHistory = async () => {
  const URL = `https://api.coingecko.com/api/v3/coins/${props.coinId}/market_chart?vs_currency=usd&days=30&interval=daily&precision=3`
  const res = await fetch(URL)
  const resData = await res.json()
  coinHistory.value = resData
  for (const el of resData.prices) {
    let price = el[1].toFixed(2)
    prices.push(price)
    let date = new Date(el[0]).toLocaleString().split(',')[0]
    timestamps.push(date)
  }
}
getCoinHistory()

const chartData = {
  labels: timestamps,

  datasets: [
    {
      data: prices,
      borderColor: '#ffffff',
      tension: 0.1,
      borderWidth: 2
    }
  ]
}
const chartOptions = {
  responsive: true,

  scales: {
    y: {
      grid: {
        color: '#ffffff5f',
        // tickBorderDash: [1, 5],
        display: true
      },
      ticks: { color: 'white' }
    },
    x: {
      grid: {
        color: '#ffffff5f',
        // tickBorderDash: [1, 2],
        display: true
      },
      ticks: { color: 'white' }
    }
  }
}

const chartColors = {
  borderColor: 'red',
  pointBorderColor: 'white',
  pointBackgroundColor: 'white'
}
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1em;
  padding-top: 150px;
}

.chart {
  margin-block: var(--space-l-xl);
}

h3 {
  text-align: center;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-top: 2px solid white;
  font-size: var(--font-size-2);

  height: fit-content;
  padding: 1em;
}

.image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.stats {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  font-size: var(--font-size-2);
}
.green {
  color: lime;
}
.red {
  color: red;
}

@media (min-width: 768px) {
  .info {
    flex-direction: row;
  }
  .text {
    width: 65%;
    border-left: 2px solid white;
    border-top: none;
    font-size: var(--font-size-1);
  }
  .image {
    width: 35%;
  }
  .stats {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: var(--font-size-1);
  }
}
</style>
