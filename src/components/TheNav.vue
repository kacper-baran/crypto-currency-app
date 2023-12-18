<template>
  <nav id="navbar">
    <div class="container">
      <div>
        <router-link class="logo" :to="{ name: 'home' }">
          <img src="../assets/svg/logo.svg" alt="logo" />
        </router-link>
      </div>
      <ul class="menu" :class="{ menuActive: menuActive }">
        <li>
          <router-link class="nav-link" @click="closeMenu" :to="{ name: 'home' }">
            Home
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" @click="closeMenu" :to="{ name: 'home', hash: '#market' }">
            Market
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" @click="closeMenu" :to="{ name: 'home', hash: '#about' }">
            About
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" @click="closeMenu" :to="{ name: 'home', hash: '#pricing' }">
            Pricing
          </router-link>
        </li>
        <li>
          <base-button mode="accent" @click="closeMenu" link to="/">Join</base-button>
        </li>
      </ul>
      <button class="hamburger desktop" :class="{ active: hamburgerActive }" @click="handleMenu">
        <div class="hamburger__inner">
          <div class="hamburger-item"></div>
          <div class="hamburger-item"></div>
          <div class="hamburger-item"></div>
        </div>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { onBeforeUnmount } from 'vue'
const menuActive = ref(false)
const hamburgerActive = ref(false)

const body = document.querySelector('body')
const handleMenu = () => {
  hamburgerActive.value = !hamburgerActive.value
  menuActive.value = !menuActive.value
  body.classList.toggle('locked')
}

const closeMenu = () => {
  menuActive.value = false
  hamburgerActive.value = false
  body.classList.remove('locked')
}

const navActive = ref(true)
//Prevents errors when routing to diffrent pages
onBeforeUnmount(() => {
  navActive.value = false
})

let prevScrollpos = window.pageYOffset
window.onscroll = function () {
  if (navActive.value) {
    let currentScrollPos = window.pageYOffset
    if (menuActive.value !== true) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0'
      } else {
        document.getElementById('navbar').style.top = '-130px'
      }
      prevScrollpos = currentScrollPos
    }
  }
}
</script>

<style scoped>
nav {
  position: fixed;
  background-color: var(--nav-background-color);
  width: 100%;
  padding: var(--space-2xs);
  z-index: 10;
  transition: top 0.3s ease-in;
}

.menu {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-3);
  inset: 0;
  background-color: var(--nav-menu-background-color);
  background-position: center;
  background-size: cover;
  background-image: url('/src/assets/svg/polygon-scatter-haikei-mobile.svg');
  translate: 120vw;
  transition: translate 0.3s ease-out;
  z-index: 100;
}
.menu a {
  font-size: var(--font-size-2);
}

.menuActive {
  translate: 0;
}
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.logo-container:hover img {
  rotate: 90deg;
}

img {
  width: 30px;
  transition: rotate 0.3s;
}
ul {
  display: flex;
  flex-direction: column;

  gap: 3rem;
  list-style: none;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 70rem;
  margin-inline: auto;
  padding-inline: 1rem;
}

.hamburger {
  position: relative;
  background-color: transparent;
  padding: 1em;
  width: 40px;
  z-index: 1000;
}

.hamburger-item {
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: var(--nav-hamburger-color);
  transition: all 0.2s ease-out;
}
.hamburger-item:first-child {
  top: 0;
}

.hamburger-item:last-child {
  bottom: 0;
}
.hamburger-item:nth-child(2) {
  top: 50%;
  translate: 0 -50%;
}

.hamburger.active .hamburger-item:first-child,
.hamburger.active .hamburger-item:last-child {
  right: 0;
  width: 90%;
}

.hamburger.active .hamburger-item:first-child {
  rotate: -135deg;
}
.hamburger.active .hamburger-item:last-child {
  rotate: 135deg;
}

.hamburger.active .hamburger-item:nth-child(2) {
  left: 0;
  width: 85%;
}
.nav-link {
  position: relative;
  color: var(--nav-link-color);
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  height: 2px;
  width: 100%;
  scale: 0;
  background-color: var(--nav-link-color);
  translate: -50%;
  transition: scale 0.3s;
}
.nav-link:hover::before {
  scale: 1;
}

.nav-link {
  padding-block: var(--space-s);
  padding-inline: var(--space-2xs);
}

@media (min-width: 768px) {
  .menu {
    position: relative;
    inset: auto;
    height: auto;
    width: auto;
    translate: 0;
    background-image: url();
    background-color: transparent;
  }
  ul,
  .menu {
    flex-direction: row;
  }

  .desktop {
    display: none;
  }
  .menu a {
    font-size: var(--font-size-1);
  }
}
</style>
