<script lang="ts" setup>
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import type { Slider } from '@/core/types/slider';
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import ContactAdminButton from './ContactAdminButton.vue';
import TextSection from './TextSection.vue';
import type { Prestasi } from '@/core/types/Prestasi';
import type { Team } from '@/core/types/team';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  sliders: Slider[];
  prestasi: Prestasi [];
  dosen: Team[];
  isLoading?: boolean;
}>();

const currentSlide = ref(0);
const isInitialLoad = ref(true);
let interval: number;

const nextSlide = () => {
  isInitialLoad.value = false;
  currentSlide.value = (currentSlide.value + 1) % props.sliders.length;
};

const goToSlide = (index: number) => {
  isInitialLoad.value = false;
  currentSlide.value = index;
};

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      isInitialLoad.value = false;
    }, 100);
  });
  interval = setInterval(nextSlide, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div class="min-w-full p-0 md:p-4 lg:p-8">
    <div v-if="isLoading"
      class="relative w-full h-[80vh] md:h-[426px] lg:h-[656px] overflow-hidden bg-gray-200 rounded-b-[32px] md:rounded-[24px] lg:rounded-[32px] animate-pulse">
      <div class="absolute inset-0 flex items-center justify-center">
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z">
          </path>
        </svg>
      </div>
    </div>

    <div v-else class="relative w-full h-[80vh] md:h-[426px] lg:h-[656px] overflow-hidden">
      <div v-for="(slider, index) in sliders" :key="index"
        class="w-full h-full absolute top-0 left-0 bg-cover bg-top rounded-b-[32px] md:rounded-[24px] lg:rounded-[32px] transition-opacity duration-1000"
        :style="{
          'opacity': currentSlide === index ? 1 : 0,
          'z-index': currentSlide === index ? 1 : 0
        }">
        <div class="w-full h-full z-10">
          <img :src="getImageUrl(slider.image1)" alt=""
            class="w-full h-full object-cover object-top rounded-b-[32px] md:rounded-[24px] lg:rounded-[32px]">
          </div>
          <div class="absolute inset-0 bg-black/40"></div>

        <!-- Tablet & Dekstop -->
        <div
          class="w-1/2 absolute top-[20%] left-1/2 transform -translate-x-1/2 space-y-6 md:space-y-8 lg:space-y-10 z-2 hidden md:block">
          <div class="space-y-4 md:space-y-6">
            <h1
              class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight text-white text-center transition-all duration-1000 transform"
              :class="(currentSlide === index && !isInitialLoad) ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'">
              {{ slider.title }}
            </h1>
          </div>
        </div>

        <div
          class="absolute bottom-8 left-8 space-y-4 md:space-y-5 lg:space-y-6 transition-all duration-1000 transform delay-200 hidden md:block"
          :class="(currentSlide === index && !isInitialLoad) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'">
          <div class="text-white">
            <h6 class="text-[16px] md:text-[24px] lg:text-[32px]">{{ prestasi.length }}+</h6>
            <TextSection>Prestasi</TextSection>
          </div>

          <div class="text-white">
            <h6 class="text-[16px] md:text-[24px] lg:text-[32px]">{{ dosen.length }}+</h6>
            <TextSection>Dosen Berpengalaman</TextSection>
          </div>
        </div>

        <div class="absolute bottom-8 right-8 space-x-4 lg:space-x-6 transition-all duration-1000 transform delay-200 hidden md:block"
          :class="(currentSlide === index && !isInitialLoad) ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'">
          <a href="https://registrasi.unpas.ac.id/register" target="_blank">
            <InteractiveHoverButton :text="'Daftar Sekarang'" />
          </a>
          <ContactAdminButton bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'" :border-color="'border-white'"
            :text-color="'text-white'" :text-hover="'group-hover:text-white'" />
        </div>

        <!-- Mobile -->
        <div class="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1
            class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight text-white text-center p-4 transition-all duration-1000 transform"
            :class="(currentSlide === index && !isInitialLoad) ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'">
            {{ slider.title }}
          </h1>
          <div class="transition-all duration-1000 transform mb-4"
            :class="(currentSlide === index && !isInitialLoad) ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'">
            <TextSection><span class="text-center text-white" v-html="slider.description"></span></TextSection>
          </div>

          <div
            class="w-full flex justify-center items-center gap-4 lg:gap-6 transition-all duration-1000 transform delay-200"
            :class="(currentSlide === index && !isInitialLoad) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'">
            <InteractiveHoverButton :text="'Daftar Sekarang'"></InteractiveHoverButton>
            <InteractiveHoverButton :bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'"
              :border-color="'border-white'" :text="'Hubungi Admin'" :text-color="'text-white'"
              :text-hover="'group-hover:text-white'" />
          </div>
        </div>
      </div>

      <!-- Dots Indicator -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 my-2 lg:my-4">
        <button v-for="(_, index) in sliders" :key="index" @click="goToSlide(index)"
          class="w-8 md:w-10 lg:w-[45px] h-1 rounded-full transition-all"
          :class="currentSlide === index ? 'bg-white w-[56px] md:w-[68px] lg:w-[98px]' : 'bg-gray-300'">
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
