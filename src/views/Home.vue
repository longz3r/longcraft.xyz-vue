<script setup>
    import ServerStatus from '../components/ServerStatus.vue'
</script>

<template>
    <div class="font-bold text-2xl pb-5">Server open soon</div>
    <div class="flex flex-col pb-14">
      <vue3-flip-countdown :deadlineISO="'2023-07-10T07:00:00Z'"
        :labelColor = "'#FFFFFF'"
        :mainColor = "'#00FFFF'"
        :secondFlipColor = "'#00FFFF'"
        :mainFlipBackgroundColor = "'#393938'"
        :secondFlipBackgroundColor = "'#4f4f4e'"

      />
    </div>
    <div>
        <ServerStatus />
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>