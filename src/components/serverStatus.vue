<template>
  <div>
    <div v-if="loading" class>
      <div class="flex items-center">
      <div
        class="text-green-500 mt-1 mr-3 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
      </div>
      <div class="font-bold text-2xl">Đang tải trạng thái server...</div>
      </div>
    </div>
    <div v-else>
      <div v-if="error">{{ error }}</div>
      <div v-else>
        <div v-if="status.online">
          <div class="font-mono text-2xl text-green-500 outline outline-offset-2 outline-4 outline-cyan-500 rounded-lg">Server online</div>
          <div class="pb-5"></div>
          Players Online: {{ status.players.online }} / {{ status.players.max }}
          <!-- <div>Version: {{ status.version }}</div> -->
        </div>
        <div v-else>
          <div class="font-mono text-2xl text-red-500 outline outline-offset-2 outline-4 outline-cyan-500 rounded-lg">Server offline</div>
          <div class="pb-5"></div>
        </div>
        <div>Java IP: longcraft.xyz</div>
        <div>Bedrock IP: bedrock.longcraft.xyz</div>
        <div>Bedrock port: {{ status.port }}</div>
        <!-- <div v-if="status.online">Max Players: {{ status.players.max }}</div> -->
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "ServerStatus",
  data() {
    return {
      loading: true,
      error: null,
      status: null
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "https://api.mcsrvstat.us/2/longcraft.xyz"
      );
      this.status = response.data;
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  }
};
</script>
