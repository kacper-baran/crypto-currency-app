<template>
  <section id="pricing">
    <div class="wrapper flow">
      <h2 class="heading">Pircing</h2>
      <div class="container">
        <div class="pricing-card flow">
          <h3 class="heading">Basic</h3>
          <IconFreeRights :stroke-width="1" :size="35"></IconFreeRights>
          <ul>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
          </ul>
          <base-button class="button">Get Started</base-button>
        </div>
        <div class="pricing-card flow">
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
          <h3 class="heading">Premium</h3>
          <IconVip :stroke-width="1" :size="35"></IconVip>
          <ul>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
          </ul>
          <base-button class="button">Buy Now</base-button>
        </div>
        <div class="pricing-card flow">
          <h3 class="heading">Enterprise</h3>
          <IconBuildingSkyscraper :stroke-width="1" :size="35"></IconBuildingSkyscraper>
          <ul>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
            <li><IconCircleCheck></IconCircleCheck> Lorem ipsum dolor sit amet.</li>
          </ul>
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

h3 {
  margin-top: 0;
}

ul {
  display: grid;
  gap: var(--space-xs);
}
li {
  display: flex;
  align-items: center;
  gap: 1em;
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
}

.box-shadow, .border {
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
