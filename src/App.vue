<script setup>
  import ServerStatus from './components/serverStatus.vue';
</script>

<template>
  <div id="app">
    <ServerStatus />
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
    ServerStatus
  }
};
</script>