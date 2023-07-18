<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="inline">
        <RouterLink to="/">Survival Multiplayer</RouterLink>
        <RouterLink to="/map">Map</RouterLink>
  </nav>
  
  <div class="flex pt-5"></div>
  <RouterView> </RouterView>

  <div class="pt-10 inline-flex">
    <a href="https://discord.gg/2ybsgmYgbD" target="_blank"  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 inline-flex items-center">
      <img src="./assets/discord.svg" width="30" class="pr-2">
        Discord
      </span>
    </a>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style scoped>

nav {
  width: 100%;
  font-size: 100%;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

a,
.green {
  text-decoration: none;
  color: rgb(0,255,255);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

</style>