<template>
  <div id="app">
    <ServerStatus />
  </div>
</template>

<script>
import ServerStatus from "@/components/ServerStatus.vue";

export default {
  name: "App",
  components: {
    ServerStatus
  }
};
</script>