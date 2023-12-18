<template>
  <section id="pricing">
    <div class="wrapper flow">
      <h2 class="heading">Pircing</h2>
      <div class="container">
        <div class="pricing-card flow">
          <div class="content">
            <h3 class="heading">Basic</h3>
            <IconFreeRights :stroke-width="1" :size="35"></IconFreeRights>
            <p>$9.99/month</p>
            <ul>
              <li>
                <IconCircleCheck :stroke-width="1" :size="25"></IconCircleCheck> Market Insights:
                Access fundamental market insights to stay informed.
              </li>
              <li>
                <IconCircleCheck :stroke-width="1" :size="25"></IconCircleCheck> Beginner Guides:
                Comprehensive guides for those new to crypto trading.
              </li>
              <li>
                <IconCircleCheck :stroke-width="1" :size="25"></IconCircleCheck> Email Support:
                Receive timely assistance through our email support.
              </li>
            </ul>
          </div>
          <base-button class="button">Buy Now</base-button>
        </div>
        <div class="pricing-card">
          <div
            class="border"
            :style="{
              background:
                'conic-gradient(from ' +
                gradientDirection +
                'deg, aquamarine, mediumpurple, aquamarine)'
            }"
          >
            <div
              class="box-shadow"
              :style="{
                background:
                  'conic-gradient(from ' +
                  gradientDirection +
                  'deg, aquamarine, mediumpurple, aquamarine)'
              }"
            ></div>
          </div>
          <div class="content">
            <h3 class="heading">Premium</h3>
            <IconVip :stroke-width="1" :size="35"></IconVip>
            <p>$29.99/month</p>
            <ul>
              <li>
                <IconCircleCheck :stroke-width="1" :size="25"></IconCircleCheck> Mxpert Analysis:
                Exclusive expert analysis for a competitive edge.
              </li>
              <li>
                <IconCircleCheck :stroke-width="1" :size="25"></IconCircleCheck> Advanced
                Strategies: Unlock advanced trading strategies to optimize your approach.
              </li>
              <li>
                <IconCircleCheck :stroke-width="1" :size="25"></IconCircleCheck> 24/7 Live Chat
                Support: Immediate assistance with our round-the-clock live chat support.
              </li>
            </ul>
          </div>
          <base-button class="button">Buy Now</base-button>
        </div>
        <div class="pricing-card">
          <div class="content">
            <h3 class="heading">Enterprise</h3>
            <IconBuildingSkyscraper :stroke-width="1" :size="35"></IconBuildingSkyscraper>
            <p>Custom Pricing</p>
            <ul>
              <li>
                <IconCircleCheck :stroke-width="1" :size="25"></IconCircleCheck> Tailored Solutions:
                Customized strategies and solutions for your specific needs.
              </li>
              <li>
                <IconCircleCheck :stroke-width="1" :size="25"></IconCircleCheck> Priority Access:
                Get priority access to new features and market insights.
              </li>
              <li>
                <IconCircleCheck :stroke-width="1" :size="25"></IconCircleCheck> Dedicated Account
                Manager: A dedicated account manager for personalized support.
              </li>
              <li>
                <IconCircleCheck :stroke-width="1" :size="25"></IconCircleCheck> API Integration:
                Seamlessly integrate our platform with your enterprise systems.
              </li>
            </ul>
          </div>
          <base-button class="button">Buy Now</base-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { IconFreeRights, IconCircleCheck, IconVip, IconBuildingSkyscraper } from '@tabler/icons-vue'

const gradientDirection = ref(0)

onMounted(() => {
  setInterval(() => {
    gradientDirection.value++
    if (gradientDirection.value === 360) {
      gradientDirection.value = 0
    }
  }, 15)
})
</script>

<style scoped>
h2 {
  font-size: var(--font-size-5);
}

h2,
h3 {
  margin-inline: auto;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-s);
}
.pricing-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid;
  border-color: var(--c-cyan);
  border-radius: 7px;
  background-color: var(--c-blue-transparent);
  padding: var(--space-m);
}

.pricing-card:nth-of-type(2) {
  background-color: var(--c-blue);
  border-color: transparent;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

h3 {
  margin-top: 0;
}

ul {
  display: grid;
  gap: var(--space-xs);
}
li {
  display: grid;
  grid-template-columns: 25px 1fr;
  gap: 1rem;
}
.button {
  width: 100%;
  margin-top: var(--space-m);
}

@media (min-width: 768px) {
  .container {
    display: flex;
    flex-direction: row;
  }
  .pricing-card {
    width: 33%;
  }
}

.box-shadow,
.border {
  position: absolute;
  inset: -6px;
  z-index: -1;
  filter: blur(25px);
  border-radius: 10px;
}

.border {
  filter: blur(0px);
}
</style>
