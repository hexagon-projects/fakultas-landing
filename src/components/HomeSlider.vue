<script lang="ts" setup>
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import type { Slider } from '@/core/types/slider';
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import ContactAdminButton from './ContactAdminButton.vue';
import TextSection from './TextSection.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  sliders: Slider[];
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
        <div class="w-full h-full z-10 img-container">
          <img :src="getImageUrl(slider.image1)" alt="" class="w-full h-full object-cover object-top img-box">
          <svg :style="{ visibility: 'hidden', position: 'absolute' }" width="0" height="0"
            xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo" />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
          <div class="absolute inset-0 bg-black/50 rounded-b-[32px] md:rounded-[24px] lg:rounded-[32px] z-1 img-box">
          </div>
        </div>

        <!-- Tablet & Dekstop -->
        <div
          class="absolute top-1/2 left-1/2 transform -translate-y-1/2 md:left-[4%] space-y-6 md:space-y-8 lg:space-y-10 z-2 hidden md:block">
          <div class="space-y-4 md:space-y-6 lg:max-w-[60%]">
            <h1
              class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight text-white text-left transition-all duration-1000 transform"
              :class="(currentSlide === index && !isInitialLoad) ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'">
              {{ slider.title }}
            </h1>
            <div class="transition-all duration-1000 transform"
              :class="(currentSlide === index && !isInitialLoad) ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'">
              <TextSection><span class="text-white" v-html="slider.description"></span></TextSection>
            </div>
          </div>

          <div class="w-full space-x-4 lg:space-x-6 transition-all duration-1000 transform delay-200"
            :class="(currentSlide === index && !isInitialLoad) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'">
            <a href="https://registrasi.unpas.ac.id/register" target="_blank">
              <InteractiveHoverButton :text="'Daftar Sekarang'" />
            </a>
            <ContactAdminButton bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'" :border-color="'border-white'"
              :text-color="'text-white'" :text-hover="'group-hover:text-white'" />
          </div>
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

    <div class="relative">
      <div class="absolute bottom-0 right-0 bg-white rounded-xl p-6 shadow-lg max-w-sm hidden lg:block z-10">
        <div class="flex text-amber-400 mb-2 gap-2">
          <svg v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
            fill="currentColor">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>

        <TextSection>Fakultas kami telah meraih Akreditasi A BAN-PT, mencerminkan standar pendidikan tinggi dan
          kualitas pengajaran terbaik.</TextSection>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .img-box {
    clip-path: polygon(58% 100%, 58% 68%, 100% 68%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1124px) {
  .img-box {
    clip-path: polygon(62% 100%, 62% 68%, 100% 68%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1224px) {
  .img-box {
    clip-path: polygon(65% 100%, 65% 68%, 100% 68%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1324px) {
  .img-box {
    clip-path: polygon(68% 100%, 68% 68%, 100% 68%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1400px) {
  .img-box {
    clip-path: polygon(70% 100%, 70% 68%, 100% 68%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1500px) {
  .img-box {
    clip-path: polygon(72% 100%, 72% 68%, 100% 68%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1600px) {
  .img-box {
    clip-path: polygon(74% 100%, 74% 68%, 100% 68%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1700px) {
  .img-box {
    clip-path: polygon(75% 100%, 75% 68%, 100% 68%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 768px) {
  .img-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
  }
}
</style>
