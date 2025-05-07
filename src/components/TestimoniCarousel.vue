<script setup lang="ts">
import { ref, computed } from 'vue';
import { berandaStore } from '@/stores';
import SectionLayout from '@/layouts/SectionLayout.vue';
import TextBody from './TextBody.vue';

const currentIndex = ref(0)

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const currentTestimoni = computed(() => {
  return berandaStore.testimoniData[currentIndex.value]
})

const next = () => {
  if (currentIndex.value < berandaStore.testimoniData.length - 1) {
    currentIndex.value++
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<template>
  <SectionLayout>
    <div class="w-full">
      <transition name="fade" mode="out-in">
        <div
          :key="currentIndex"
          class="w-full flex flex-col md:flex-row gap-10 lg:gap-20"
          v-if="currentTestimoni"
        >
          <div class="w-full md:w-1/2">
            <div class="bg-gray-200 w-full h-80 lg:h-[508px] rounded-[32px] overflow-hidden flex items-center justify-center">
              <img
                v-if="currentTestimoni.image"
                :src="getImageUrl(currentTestimoni.image)"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2 flex flex-col gap-5 justify-center">
            <p class="text-[14px] md:text-[18px] lg:text-[22px]" v-html="currentTestimoni.description" />
            <div class="space-y-2 md:space-y-4">
              <TextBody :weightText="'font-semibold'">{{ currentTestimoni.name }}</TextBody>
              <TextBody>{{ currentTestimoni.title }}</TextBody>
            </div>
          </div>
        </div>
      </transition>

      <!-- Navigation -->
      <div class="flex justify-between items-center mt-5">
        <!-- Dots -->
        <div class="flex justify-center mt-4 gap-2">
          <span
            v-for="(_, index) in berandaStore.testimoniData.length"
            :key="index"
            @click="currentIndex = index"
            :class="[
              'h-[6px] w-8 rounded-full cursor-pointer transition-colors',
              currentIndex === index ? 'bg-colorPrimary' : 'bg-gray-400'
            ]"
          ></span>
        </div>

        <!-- Arrows -->
        <div class="flex gap-4">
          <button
            @click="prev"
            :disabled="currentIndex === 0"
            class="border border-colorPrimary text-colorPrimary rounded-full p-2 disabled:opacity-50 hover:bg-colorPrimary hover:text-white transition-colors duration-300 disabled:bg-none disabled:hover:bg-transparent disabled:hover:text-colorPrimary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            @click="next"
            :disabled="currentIndex === berandaStore.testimoniData.length - 1"
            class="border border-colorPrimary text-colorPrimary rounded-full p-2 disabled:opacity-50 hover:bg-colorPrimary hover:text-white transition-colors duration-300 disabled:bg-none disabled:hover:bg-transparent disabled:hover:text-colorPrimary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
