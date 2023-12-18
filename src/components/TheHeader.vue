<template>
  <section>
    <div class="wrapper">
      <div class="header">
        <div class="flow">
          <h1 class="heading">CryptoHub: Navigate the Digital Markets With Us</h1>
          <p>
            Your Gateway to Smart Crypto Trading. Elevate your strategy with real-time analysis,
            expert insights, and market mastery. Unleash the power of digital assets for financial
            success!
          </p>
          <div class="buttons">
            <base-button mode="accent">Join</base-button>
            <base-button link :to="{ name: 'home', hash: '#market' }">Go to Market</base-button>
          </div>
        </div>
        <div class="socials">
          <IconBrandInstagram class="icon" :size="45" stroke-width="1"></IconBrandInstagram>
          <IconBrandFacebook class="icon" :size="45" stroke-width="1"></IconBrandFacebook>
          <IconBrandLinkedin class="icon" :size="45" stroke-width="1"></IconBrandLinkedin>
          <IconBrandTwitter class="icon" :size="45" stroke-width="1"></IconBrandTwitter>
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <div v-if="coins" class="card-body">
            <img :src="coins[0].image" :alt="coins[0].name + ' icon'" />
            <p>
              {{ coins[0].name }}
              <span
                :class="[
                  { green: coins[0].price_change_percentage_24h > 0 },
                  { red: coins[0].price_change_percentage_24h < 0 }
                ]"
                >{{ coins[0].price_change_percentage_24h }}%</span
              >
            </p>
            <p>{{ coins[0].current_price }}$</p>
          </div>
          <div v-else class="error">Failed to fetch. Try again later.</div>
        </div>
        <div class="card">
          <div v-if="coins" class="card-body">
            <img :src="coins[1].image" :alt="coins[1].name + ' icon'" />
            <p>
              {{ coins[1].name }}
              <span
                :class="[
                  { green: coins[1].price_change_percentage_24h > 0 },
                  { red: coins[1].price_change_percentage_24h < 0 }
                ]"
                >{{ coins[1].price_change_percentage_24h }}%</span
              >
            </p>
            <p>{{ coins[1].current_price }}$</p>
          </div>
          <div v-else class="error">Failed to fetch. Try again later.</div>
        </div>
        <div class="card">
          <div v-if="coins" class="card-body">
            <img :src="coins[2].image" :alt="coins[2].name + ' icon'" />
            <p>
              {{ coins[2].name }}
              <span
                :class="[
                  { green: coins[2].price_change_percentage_24h > 0 },
                  { red: coins[2].price_change_percentage_24h < 0 }
                ]"
                >{{ coins[2].price_change_percentage_24h }}%</span
              >
            </p>
            <p>{{ coins[2].current_price }}$</p>
          </div>
          <div v-else class="error">Failed to fetch. Try again later.</div>
        </div>
        <div class="card">
          <div v-if="coins" class="card-body">
            <img :src="coins[3].image" :alt="coins[3].name + ' icon'" />
            <p>
              {{ coins[3].name }}
              <span
                :class="[
                  { green: coins[3].price_change_percentage_24h > 0 },
                  { red: coins[3].price_change_percentage_24h < 0 }
                ]"
                >{{ coins[3].price_change_percentage_24h }}%</span
              >
            </p>
            <p>{{ coins[3].current_price }}$</p>
          </div>
          <div v-else class="error">Failed to fetch. Try again later.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons-vue'

const URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&locale=en'
const coins = ref(null)
const getCoins = async () => {
  const res = await fetch(URL, { crossDomain: true })

  const resData = await res.json()
  console.log(resData)
  coins.value = resData
}
getCoins()

onMounted(() => {
  const cards = document.querySelectorAll('.card')
  cards.forEach((card) => {
    card.onpointermove = (event) => {
      const cursorPosY = (event.offsetY / event.target.clientHeight) * 100

      const cursorPosX = (event.offsetX / event.target.clientWidth) * 100

      const x = cursorPosY * -0.01
      const y = cursorPosX * 0.01

      card.style.transform = `rotate3d(${x * 2 + 1}, ${y * 2 - 1}, 0, 16deg)`
    }
    card.onmouseleave = () => {
      card.style.transform = `rotateX(0deg)`
    }
  })
})
</script>

<style scoped>
h1 {
  font-size: var(--font-size-5);
}

.buttons {
  display: flex;
  gap: 1em;
}

.green {
  color: lime;
}
.red {
  color: red;
}

section {
  position: relative;
  display: flex;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-block-start: var(--space-xl-2xl);
  padding-block-end: var(--space-m);
  paddinga-inline: var(--space-xs);
  min-height: 100vh;
  max-width: 100vw;
  z-index: 3;
}
.wrapper {
  display: grid;
  place-items: center;
  justify-content: center;
  align-items: center;
  gap: var(--space-l);
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-s);
  height: 76%;
}

p {
  font-size: var(--font-size-2);
}

.flow {
  --flow-spacer: var(--space-s);
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: var(--space-xs);
  perspective: 1600px;
  padding-block: var(--space-l);
  height: 100%;
}
.cards .card {
  height: 100%;
  width: 100%;
  border: 2px solid;
  border-color: var(--c-cyan);
  border-radius: 7px;
  padding: var(--space-s);
  background-color: var(--c-blue-transparent);
  transition: transform 0.3s;
  overflow: hidden;
}
.card .card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.card p {
  font-size: var(--font-size-1);
  text-align: center;
}

.error {
  text-align: center;
}

.cards .card:nth-of-type(1) {
  grid-column: 1 / 3;
  grid-row: 2 / 5;
}

.cards .card:nth-of-type(2) {
  grid-column: 3 / -1;
  grid-row: 1 / 4;
}
.cards .card:nth-of-type(3) {
  grid-column: 1 / 3;
  grid-row: 5 / -1;
}
.cards .card:nth-of-type(4) {
  grid-column: 3 / -1;
  grid-row: 4 / 7;
}

.socials {
  display: flex;
  gap: var(--space-m);
}
.icon {
  cursor: pointer;
  transition: color 0.3s;
}

.icon:hover {
  color: var(--c-light-blue);
}

@media (min-width: 800px) {
  section {
    grid-template-columns: 1fr 1fr;
    max-height: 100vh;
    overflow: hiden;
  }
  .wrapper {
    display: flex;
    justify-content: center;
  }
  .header {
    width: 55%;
  }
  .cards {
    width: 35%;
    padding-block: 0;
  }
}
</style>
