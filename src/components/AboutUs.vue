<template>
  <section id="about">
    <div class="wrapper">
      <div class="container">
        <div class="header flow">
          <h2 class="heading">Why Choose Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium voluptate
            maxime, animi quos itaque modi sequi quibusdam dolore, commodi ipsa rem velit et aperiam
            repudiandae. Beatae dicta ad quidem.
          </p>
        </div>
        <div class="main">
          <div class="item">
            <IconSocial :size="39" stroke-width="1"></IconSocial>
            <h3 class="heading">title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea corporis, quam dolor
              facere obcaecati nam.
            </p>
          </div>
          <div class="item">
            <IconBrandDiscord :size="39" stroke-width="1"></IconBrandDiscord>
            <h3 class="heading">title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea corporis, quam dolor
              facere obcaecati nam.
            </p>
          </div>
          <div class="item">
            <IconDiscount :size="39" stroke-width="1"></IconDiscount>
            <h3 class="heading">title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea corporis, quam dolor
              facere obcaecati nam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { IconSocial, IconBrandDiscord, IconDiscount } from '@tabler/icons-vue'
</script>

<style scoped>
h2 {
  margin-inline: auto;
  text-align: center;
  font-size: var(--font-size-5);
}
h3 {
  font-size: var(--font-size-3);
  width: fit-content;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: var(--space-l);
}

.header p {
  position: relative;
  max-width: 700px;
}
.header p::before {
  position: absolute;
  content: '';
  width: 30%;
  height: 3px;
  background: hsla(160, 100%, 64%, 1);
  background: linear-gradient(90deg, hsla(160, 100%, 64%, 1) 0%, hsla(193, 90%, 55%, 1) 100%);
  bottom: -40px;
  left: 50%;
  translate: -50% -50%;
}

.main {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-m-l);
  border: 2px solid;
  margin-top: var(--space-s);
  padding: var(--space-l);
  border-color: var(--c-cyan);
  border-radius: 6px;
  background-color: var(--c-blue-transparent);
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1em;
}

@media (min-width: 768px) {
  .main {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
