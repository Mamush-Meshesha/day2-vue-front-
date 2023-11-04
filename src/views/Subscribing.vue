<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="w-[1800px] h-[1000px] flex justify-center items-center">
    <div class="w-[500px] h-[500px] border-2">
      <div class="flex my-2 justify-center">
        <Icon
          icon="ri:checkbox-circle-line"
          class="mr-3 text-4xl bg-[#F56557] text-white rounded-full"
        />
      </div>
      <div>
        <div>
          <h1 class="text-5xl font-bold text-center line-clamp-5">
            Thanks For Subscribing!
          </h1>
        </div>
        <div class="my-7 mx-11">
          <p class="leading-8 text-xl capitalize">
            a comfirmation email sent to {{ email }} please and click the open
            button inside to confirm your subscriptions
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          class="w-[400px] h-12 border text-white bg-[#000000c9] rounded-lg"
        >
          Dismiss message
        </button>
      </div>
    </div>
  </div>
</template>
