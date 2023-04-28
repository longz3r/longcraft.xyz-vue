<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="inline">
        <RouterLink to="/">Survival Multiplayer</RouterLink>
        <RouterLink to="/modpack">Modpack</RouterLink>
  </nav>
  <div class="flex pt-5"></div>
  <RouterView />
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