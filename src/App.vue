<template>
  <div id="blur"></div>
  <div class="blob-container">
    <div id="blob" ref="blob"></div>
  </div>
  <main>
    <TheNav></TheNav>
    <router-view></router-view>
    <TheFooter></TheFooter>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import TheNav from '/src/components/TheNav.vue'
import TheFooter from '/src/components/TheFooter.vue'

const blob = ref(null)

window.onpointermove = (event) => {
  const { pageX, pageY } = event

  blob.value.animate(
    {
      left: `${pageX}px`,
      top: `${pageY}px`
    },
    { duration: 3000, fill: 'forwards' }
  )
}
</script>

<style>
body {
  height: auto;
}
main {
  position: relative;
  background-image: url('assets/svg/polygon-scatter-haikei-large.svg');
  background-position: center;
  background-size: cover;
  z-index: 4;
}
.blob-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#blob {
  height: 34vmax;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  border-radius: 50%;
  opacity: 0.8;
  background-color: var(--c-blue);
}

#blur {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  backdrop-filter: blur(12vmax);
}

@media (max-width: 768px) {
  #blob {
    display: none;
  }
}
</style>
