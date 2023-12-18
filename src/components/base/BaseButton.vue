<template>
  <button @click="dupa" v-if="!link" :class="[props.mode]">
    <div
      v-if="props.mode === 'accent'"
      class="button-shadow"
      :style="{
        background: 'conic-gradient(from ' + gradientDirection + 'deg, #1e589a, #00f260, #1e589a)'
      }"
    ></div>
    <div
      v-if="props.mode === 'accent'"
      class="button-border"
      :style="{
        background: 'conic-gradient(from ' + gradientDirection + 'deg, #1e589a, #00f260, #1e589a)'
      }"
    ></div>
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="[props.mode]">
    <div
      v-if="props.mode === 'accent'"
      class="button-shadow"
      :style="{
        background: 'conic-gradient(from ' + gradientDirection + 'deg, #1e589a, #00f260, #1e589a)'
      }"
    ></div>
    <div
      v-if="props.mode === 'accent'"
      class="button-border"
      :style="{
        background: 'conic-gradient(from ' + gradientDirection + 'deg, #1e589a, #00f260, #1e589a)'
      }"
    ></div>
    <slot></slot>
  </router-link>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: 'flat'
  },
  link: {
    type: Boolean,
    default: false
  },
  to: {
    default: false
  }
})

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
button,
a {
  position: relative;
  display: inline-block;
  text-align: center;
  border: 2px solid;
  padding: 0.8rem 2.4rem;
  border-radius: 5px;
  font-size: 1rem;
  transition:
    border 0.3s,
    background-color 0.3s,
    color 0.3s;
  color: var(--color-text);
}

.flat {
  border-color: var(--button-border-color-primary);
  background-color: var(--button-bg-primary);
  color: var(--button-color-text-primary);
}

.flat:hover {
  border-color: var(--button-border-color-primary-hover);
  background-color: var(--button-bg-primary-hover);
  color: var(--button-color-text-pirmary-hover);
}

.accent {
  position: relative;
  background-color: var(--button-bg-accent);
  border-color: var(--button-border-color-accent);
  color: var(--button-color-text-accent);
}

.accent:hover {
  border-color: var(--button-border-color-accent-hover);
  background-color: var(--button-bg-accent-hover);
  color: var(--button-color-text-accent-hover);
}

.button-shadow,
.button-border {
  position: absolute;
  inset: -8px;
  z-index: -1;
  filter: blur(15px);
  border-radius: 8px;
}
.button-border {
  inset: -5px;
  filter: blur(0px);
}
</style>
