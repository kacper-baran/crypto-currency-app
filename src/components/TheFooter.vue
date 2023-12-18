<template>
  <footer>
    <div class="container">
      <div class="content">
        <router-link class="logo" :to="{ name: 'home' }">
          <img src="../assets/svg/logo.svg" alt="logo" />
        </router-link>
      </div>
      <div class="content">
        <p>Contact</p>
        <p>email@email.com</p>
        <p>123 123 123</p>
      </div>
      <div class="content">
        <router-link class="link" :to="{ name: 'home' }"> Home </router-link>
        <router-link class="link" :to="{ name: 'home', hash: '#market' }"> Market </router-link>
        <router-link class="link" :to="{ name: 'home', hash: '#about' }"> About </router-link>
        <router-link class="link" :to="{ name: 'home', hash: '#pricing' }"> Pricing </router-link>
      </div>
    </div>
    <div class="socials">
      <IconBrandInstagram class="icon" :size="45" stroke-width="1"></IconBrandInstagram>
      <IconBrandFacebook class="icon" :size="45" stroke-width="1"></IconBrandFacebook>
      <IconBrandLinkedin class="icon" :size="45" stroke-width="1"></IconBrandLinkedin>
      <IconBrandTwitter class="icon" :size="45" stroke-width="1"></IconBrandTwitter>
    </div>
  </footer>
</template>

<script setup>
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter
} from '@tabler/icons-vue'
</script>

<style scoped>
footer {
  padding: var(--space-m-l);
  margin: var(--space-xs);
  background-color: var(--c-blue-transparent);
  border: 2px solid;
  border-color: var(--c-cyan);
  border-radius: 8px;
  text-align: center;
}
.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

img {
  width: 30%;
  margin-inline: auto;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.link {
  padding: var(--space-2xs);
  color: white;
  transition: color 0.3s;
}

.link:hover {
  color: cyan;
}
p {
  padding: var(--space-2xs);
}
.socials {
  display: flex;
  justify-content: center;
  margin-top: var(--space-m);
  gap: 1rem;
}

.icon {
  cursor: pointer;
  transition: color 0.3s;
}

.icon:hover {
  color: var(--c-light-blue);
}

.logo {
  cursor: pointer;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
  .content {
    width: 33%;
  }
}
</style>
