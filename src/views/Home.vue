<script setup>
import { RouterLink } from "vue-router";
import { RouterView } from "vue-router";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";

const email = ref("");
const router = useRouter();
const isEmailValid = computed(() => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
});
function submitForm() {
  if (isEmailValid && email.value !== " ") {
    router.push({ name: "subscribing", query: { email: email.value } });
  } else {
    return console.log("invalid email ,please enter valid email");
  }
}
</script>
<template>
  <div class="w-[1500px] h-screen flex gap-[130px] mx-auto">
    <div class="my-20">
      <div>
        <h1 class="text-5xl font-bold">Stay Updated!</h1>
      </div>
      <div class="my-6">
        <p class="text-3xl">
          join 60,000+ products managers reciving mounthly updates on :
        </p>
      </div>
      <div class="my-6">
        <div>
          <p class="text-2xl bg-black"></p>
        </div>
        <div class="flex my-2">
          <Icon
            icon="ri:checkbox-circle-line"
            class="mr-3 text-2xl bg-[#F56557] text-white rounded-full"
          />
          <p class="capitalize text-xl">
            product descovery and building what matters
          </p>
        </div>
        <div class="flex my-2">
          <Icon
            icon="ri:checkbox-circle-line"
            class="mr-3 text-2xl bg-[#F56557] text-white rounded-full"
          />
          <p class="capitalize text-xl">
            messaging to ensure update are success
          </p>
        </div>
        <div class="flex my-2">
          <Icon
            icon="ri:checkbox-circle-line"
            class="mr-3 text-2xl bg-[#F56557] text-white rounded-full"
          />
          <p class="capitalize text-xl">and much more</p>
        </div>
      </div>
      <form class="my-6 flex flex-col" @submit.prevent="submitForm">
        <label for="email" class="my-4 text-xl">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          class="h-12 outline-none border border-slate-400 shadow-md rounded-md"
        />
        <button
          type="submit"
          class="text-white h-12 w-full rounded-md border bg-[#000000bb]"
        >
          subsxribe to monthly news letter
        </button>
      </form>
    </div>
    <div class="my-10">
      <div class="bg-[#F56557] w-[600px] h-[800px] rounded-3xl">
        <div
          class="bg-black w-[340px] h-[340px] mt-[360px] absolute rounded-r-3xl"
        >
          <div
            class="bg-gradient-to-tl from-[#cec070] via-[#ec4637] to-[#f5eb57] w-[325px] h-[310px] mt-[15px] absolute rounded-r-2xl"
          ></div>
        </div>
        <div>
          <div
            class="w-[340px] h-[340px] bg-white absolute mt-[200px] ml-[260px] rounded-l-2xl"
          >
            <div class="bg-black w-full h-9 rounded-tl-2xl">
              <div
                class="flex w-[100px] h-full items-center justify-around mx-[30px]"
              >
                <div class="w-4 h-4 rounded-full bg-red-600"></div>
                <div class="w-4 h-4 rounded-full bg-yellow-600"></div>
                <div class="w-4 h-4 rounded-full bg-green-600"></div>
              </div>
            </div>
            <div>
              <div class="bg-slate-500"></div>
              <div class="bg-black"></div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="w-[100px] h-[160px] bg-white absolute mt-[180px] ml-[410px] shadow-2xl rounded-md"
          >
            <div class="absolute my-8 ml-10">
              <div
                class="h-24 w-2 bg-gradient-to-r from-red-500 via-green-500 to-black transform rotate-45"
              ></div>
            </div>
          </div>
          <div
            class="w-[100px] h-[160px] bg-white absolute mt-[400px] ml-[500px] shadow-2xl rounded-md flex items-center justify-center"
          >
            <div
              class="w-[70px] h-[70px] bg-[#F56557] rounded-full flex items-center justify-center"
            >
              <div class="w-[50px] h-[50px] bg-white rounded-full">
                <h1 class="text-black text-center font-bold text-xl mt-2">
                  94
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
