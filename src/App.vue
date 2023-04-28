<script setup>
  import ServerStatus from './components/serverStatus.vue';
</script>

<template>
  <!-- <div>
    <h1>My App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div><button></button> -->
  <div id="">
    <ServerStatus />
  </div>
  <!-- <div class="">ngu</div> -->
</template>

<script>

export default {
  name: "App",
  components: {
    ServerStatus
  }
};
</script>

<style>
  @font-face {
    font-family: "Minecraftia";
    src: local("Minecraftia"),
    url(./assets/fonts/Minecraftia-Regular.ttf) format("truetype");
  }
</style>