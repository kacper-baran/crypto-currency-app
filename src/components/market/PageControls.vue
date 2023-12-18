<template>
  <div class="container">
    <base-button
      link
      :to="{ name: 'home', hash: '#market' }"
      :class="{ active: currentPage === '1' }"
      class="page-btn"
      @click="setPage('1')"
      >1</base-button
    >
    <base-button
      link
      :to="{ name: 'home', hash: '#market' }"
      :class="{ active: currentPage === '2' }"
      class="page-btn"
      @click="setPage('2')"
      >2</base-button
    >
    <base-button
      link
      :to="{ name: 'home', hash: '#market' }"
      :class="{ active: currentPage === '3' }"
      class="page-btn"
      @click="setPage('3')"
      >3</base-button
    >
    <base-button
      link
      :to="{ name: 'home', hash: '#market' }"
      :class="{ active: currentPage === '4' }"
      class="page-btn"
      @click="setPage('4')"
      >4</base-button
    >
    <base-button
      link
      :to="{ name: 'home', hash: '#market' }"
      :class="{ active: currentPage === '5' }"
      class="page-btn"
      @click="setPage('5')"
      >5</base-button
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['active-page'])
const currentPage = ref('1')
const setPage = (page) => {
  currentPage.value = page
  emit('activePage', page)
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-inline: auto;
  margin-block: var(--space-l);
}
.page-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  width: 50px;
  padding: 0;
}

.active {
  border-color: var(--button-border-color-primary-hover) !important;
  background-color: var(--button-bg-primary-hover) !important;
  color: var(--button-color-text-pirmary-hover) !important;
}
</style>
