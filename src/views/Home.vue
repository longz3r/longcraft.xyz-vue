<template>
  <div>
    <div class="font-bold text-3xl pb-5">{{ countdownText }}</div>

    <div class="flex flex-col pb-14">
      <vue3-flip-countdown
        :deadlineISO="getDeadlineISO"
        :labelColor="'#FFFFFF'"
        :mainColor="'#00FFFF'"
        :secondFlipColor="'#00FFFF'"
        :mainFlipBackgroundColor="'#393938'"
        :secondFlipBackgroundColor="'#4f4f4e'"
      />
    </div>
    <div>
      <ServerStatus />
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
