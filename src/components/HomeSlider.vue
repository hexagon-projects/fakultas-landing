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
        </div>

        <!-- Tablet & Dekstop -->
        <div class="md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] absolute bottom-0 right-0 md:flex items-center hidden">
          <h1
            class="w-full text-[20px] md:text-[26px] lg:text-[32px] font-bold leading-tight text-[#444444] text-left transition-all duration-1000 transform"
            :class="(currentSlide === index && !isInitialLoad) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'">
            {{ slider.title }}
          </h1>

          <div class="transition-all duration-1000 transform delay-200"
            :class="(currentSlide === index && !isInitialLoad) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'">
            <a href="https://registrasi.unpas.ac.id/register" target="_blank">
              <InteractiveHoverButton :text="'Daftar Sekarang'" />
            </a>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 hidden md:block">
          <div class="scrolldown">
            <div class="chevrons">
              <div class="chevrondown"></div>
              <div class="chevrondown"></div>
            </div>
          </div>
        </div>

        <!-- Mobile -->
        <div class="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1
            class="text-[20px] md:text-[26px] lg:text-[32px] font-bold leading-tight text-white text-center p-4 transition-all duration-1000 transform"
            :class="(currentSlide === index && !isInitialLoad) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'">
            {{ slider.title }}
          </h1>
        </div>

        <div class="absolute bottom-0 right-0 transition-all duration-1000 transform delay-200 md:hidden"
          :class="(currentSlide === index && !isInitialLoad) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'">
          <InteractiveHoverButton :text="'Daftar Sekarang'"></InteractiveHoverButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scopeds>
.img-container {
  filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.img-box {
  clip-path: polygon(100% 92%, 70% 92%, 60% 100%, 10% 100%, 0% 92%, 0% 0%, 100% 0%);
}

@media (min-width: 320px) {
  .img-box {
    clip-path: polygon(100% 92%, 60% 92%, 50% 100%, 10% 100%, 0% 90%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 360px) {
  .img-box {
    clip-path: polygon(100% 90%, 65% 90%, 60% 100%, 10% 100%, 0% 92%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 440px) {
  .img-box {
    clip-path: polygon(100% 92%, 70% 92%, 60% 100%, 10% 100%, 0% 92%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 460px) {
  .img-box {
    clip-path: polygon(100% 92%, 75% 92%, 65% 100%, 10% 100%, 0% 92%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 560px) {
  .img-box {
    clip-path: polygon(100% 92%, 78% 92%, 68% 100%, 10% 100%, 0% 92%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 680px) {
  .img-box {
    clip-path: polygon(100% 92%, 80% 92%, 70% 100%, 10% 100%, 0% 92%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 768px) {
  .img-box {
    clip-path: polygon(100% 80%, 20% 80%, 15% 100%, 10% 100%, 0% 75%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 868px) {
  .img-box {
    clip-path: polygon(100% 80%, 20% 80%, 15% 100%, 10% 100%, 0% 75%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 968px) {
  .img-box {
    clip-path: polygon(100% 80%, 20% 80%, 15% 100%, 10% 100%, 0% 70%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 1024px) {
  .img-box {
    clip-path: polygon(100% 85%, 30% 85%, 25% 100%, 8% 100%, 0% 80%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 1124px) {
  .img-box {
    clip-path: polygon(100% 85%, 30% 85%, 25% 100%, 8% 100%, 0% 80%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 1224px) {
  .img-box {
    clip-path: polygon(100% 85%, 30% 85%, 25% 100%, 8% 100%, 0% 80%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 1280px) {
  .img-box {
    clip-path: polygon(100% 85%, 40% 85%, 35% 100%, 8% 100%, 0% 80%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 1400px) {
  .img-box {
    clip-path: polygon(100% 85%, 40% 85%, 35% 100%, 8% 100%, 0% 80%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 1500px) {
  .img-box {
    clip-path: polygon(100% 85%, 50% 85%, 45% 100%, 8% 100%, 0% 80%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 1600px) {
  .img-box {
    clip-path: polygon(100% 85%, 50% 85%, 45% 100%, 8% 100%, 0% 80%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 1700px) {
  .img-box {
    clip-path: polygon(100% 85%, 50% 85%, 45% 100%, 8% 100%, 0% 80%, 0% 0%, 100% 0%);
  }
}

@media (min-width: 768px) {
  .img-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
  }
}
</style>
