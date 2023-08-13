<template>

    <div>
      <!-- <ServerStatus /> -->
      <div class="pt-20 font-minecraftia text-3xl">
    Server is scheduled to be reopened in early September
  </div>
    </div>
</template>

<script>
import ServerStatus from '../components/serverStatus.vue';

export default {
  name: 'Home',
  components: {
    ServerStatus,
  },
  data() {
    return {
      deadlineISO: '',
    };
  },
  computed: {
    getDeadlineISO() {
      // Calculate the current time
      const currentTime = Math.floor(Date.now())

      if (currentTime <= 1689062400000) {
        return '2023-07-11T08:00:00+00:00';
      } else if (currentTime > 1689062400000 && currentTime <= 1689303600000) {
        return '2023-07-14T03:00:00.000Z'
      } else {
        return '2023-07-17T03:00:00.000Z'
      }
      
      // Return the updated deadlineISO value
      
    }, countdownText() {
      // Calculate the remaining time until the server opens
      let countdownText = ""
      const currentTime = Math.floor(Date.now())
      if (currentTime <= 1689062400000) {
        countdownText = 'SERVER OPEN IN';
      } else if (currentTime > 1689062400000 && currentTime <= 1689303600000) {
        countdownText = 'NETHER UNLOCK IN'
      } else {
        countdownText = 'THE END UNLOCK IN'
      }

      // Return the countdown text
      return countdownText;
    },
  },
};
</script>
