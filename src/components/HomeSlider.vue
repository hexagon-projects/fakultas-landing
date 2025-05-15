<script lang="ts" setup>
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import type { Slider } from '@/core/types/slider';
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

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
  currentSlide.value = (currentSlide.value + 1) % props.sliders?.length;
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
    <div class="relative w-full h-[80vh] md:h-[426px] lg:h-[656px] overflow-hidden">
      <div v-for="(slider, index) in sliders" :key="index"
        class="w-full h-full absolute top-0 left-0 bg-cover bg-center rounded-b-[32px] md:rounded-[24px] lg:rounded-[32px] transition-opacity duration-1000"
        :style="{
          'background-image': `url('${getImageUrl(slider.image1)}')`,
          'opacity': currentSlide === index ? 1 : 0,
          'z-index': currentSlide === index ? 1 : 0
        }">

        <div
          class="absolute inset-0 bg-gradient-to-t from-colorPrimary/40 via-colorPrimary/10 md:from-colorPrimary to-transparent rounded-[16px] md:rounded-[24px] lg:rounded-[32px] z-1">
        </div>

        <!-- Tablet & Dekstop -->
        <div
          class="absolute md:bottom-8 md:left-8 lg:bottom-16 lg:left-16 space-y-6 md:space-y-8 lg:space-y-10 z-2 hidden md:block">
          <h1
            class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight text-white text-left md:w-1/2 p-4 transition-all duration-1000 transform"
            :class="(currentSlide === index && !isInitialLoad) ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'">
            {{ slider.title }}
          </h1>

          <div
            class="w-full space-x-4 lg:space-x-6 transition-all duration-1000 transform delay-200"
            :class="(currentSlide === index && !isInitialLoad) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'">
            <InteractiveHoverButton :text="'Daftar Sekarang'"></InteractiveHoverButton>
            <InteractiveHoverButton :bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'"
              :border-color="'border-white'" :text="'Hubungi Admin'" :text-color="'text-white'"
              :text-hover="'group-hover:text-white'" />
          </div>
        </div>

        <!-- Mobile -->
        <div class="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1
            class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight text-white text-center p-4 transition-all duration-1000 transform"
            :class="(currentSlide === index && !isInitialLoad) ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'">
            {{ slider.title }}
          </h1>

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
        <button v-for="(_, index) in sliders" :key="index"
          @click="goToSlide(index)"
          class="w-8 md:w-10 lg:w-[45px] h-1 rounded-full transition-all"
          :class="currentSlide === index ? 'bg-white w-[56px] md:w-[68px] lg:w-[98px]' : 'bg-gray-300'">
        </button>
      </div>
    </div>
  </div>
</template>
