<template>
  <div>
    <div v-if="loading" class>
      <div class="flex items-center">
        <div role="status">
          <svg aria-hidden="true" class="w-8 h-8 mr-3 mt-1 text-gray-200 animate-spin dark:text-gray-600 fill-sky-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        </div>
        <div class="font-bold text-2xl">Đang tải trạng thái server...</div>
      </div>
    </div>
    <div v-else>
      <div v-if="error">{{ error }}</div>
      <div v-else>
        
        <div v-if="status.online" class="">
          <div class="inline-flex pl-4 pr-4 font-mono text-2xl text-green-500 outline outline-offset-2 outline-4 outline-zinc-500 rounded-lg">Server online</div>
          <div class="pb-5"></div>
          <!-- <div v-if="status.debug.cachetime != 0">
            <div>Dữ liệu update sau {{ status.debug.cacheexpire - status.debug.cachetime }}s</div>
          </div> -->
          Players Online: {{ status.players.online }} / {{ status.players.max }}
          <!-- <div>Version: {{ status.version }}</div> -->
        </div>
        <div v-else>
          <div class="inline-flex pl-4 pr-4 font-mono text-2xl text-red-500 outline outline-offset-2 outline-4 outline-zinc-500 rounded-lg">Server offline</div>
          <div class="pb-5"></div>
        </div>
        <div>Java IP: longcraft.xyz</div>
        <div>Bedrock IP: bedrock.longcraft.xyz</div>
        <div class="pb-5">Bedrock port: 19134</div>
        <!-- <div v-if="status.online">Max Players: {{ status.players.max }}</div> -->
          <a :href="'minecraft://?addExternalServer=LongCraft%20SMP|bedrock.longcraft.xyz:' + port" rel="norefferer" class="relative inline-flex items-center justify-center p-0.5 mb-5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 inline-flex items-center">
              <img src="../assets/plus.svg" width="30" class="pr-2">
              Add server (Bedrock)
            </span>
          </a>
          <!-- <a href="minecraft://?joinServer=bedrock.longcraft.net:8225" rel="norefferer" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 inline-flex items-center">
              <img src="../assets/plus.svg" width="30" class="pr-2">
              Quick connect (Bedrock)
            </span>
          </a> -->

        <div v-if="status.online" class="flex flex-col items-start bg-slate-950 pl-2 pr-2 pt-2 pb-1">
            <div class="text-sm font-minecraftia" v-html="status.motd.html[0]"></div>
            <div class="text-sm font-minecraftia" v-html="status.motd.html[1]"></div>
        </div>
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
      status: null,
      port: 19134
    };
  },
  async created() {
    try {
      const response = await axios.get(
        "https://api.mcsrvstat.us/2/longcraft.xyz"
      );
      this.status = response.data;
      // this.port = this.port + this.status.port
    } catch (error) {
      this.error = error.message;
    } finally {
      this.loading = false;
    }
  }
};

</script>
