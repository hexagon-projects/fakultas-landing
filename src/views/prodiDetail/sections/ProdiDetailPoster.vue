<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import type { Slider } from '@/core/types/slider';
import type { Swiper as SwiperClass } from 'swiper';

const prevEl = ref<HTMLElement | null>(null);
const nextEl = ref<HTMLElement | null>(null);
const paginationEl = ref<HTMLElement | null>(null);
const swiperInstance = ref<SwiperClass | null>(null);
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

defineProps<{
  slider: Slider[] | null;
}>();

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const onSwiper = (swiper: SwiperClass) => {
  swiperInstance.value = swiper;
};
</script>

<template>
  <div class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full h-full relative">
      <Swiper
      :modules="[Autoplay, Pagination]"
        :navigation="{ prevEl, nextEl }"
        :pagination="{
          el: paginationEl,
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }"
        :loop="true"
        :slides-per-view="1"
        @swiper="onSwiper"
        class="w-full h-[40vh] lg:h-[80vh] rounded-lg md:rounded-2xl lg:rounded-3xl relative"
      >
        <SwiperSlide v-for="slide in slider" :key="slide.id" class="w-full h-full overflow-hidden group">
          <img
            :src="getImageUrl(slide.image1)"
            :alt="slide.title"
            class="w-full h-full object-cover group-hover:scale-105 transition duraiton-500">
        </SwiperSlide>

        <div class="w-full flex justify-between items-center absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <div ref="prevEl" class="w-6 md:w-8 lg:w-10 h-20 bg-netral flex items-center justify-center cursor-pointer rounded-r pointer-events-auto transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#AA2132" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </div>
          <div ref="nextEl" class="w-6 md:w-8 lg:w-10 h-20 bg-netral flex items-center justify-center cursor-pointer rounded-l pointer-events-auto transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#AA2132" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        </div>

        <div class="absolute bottom-4 right-4 md:right-6 lg:right-8 z-10">
          <div ref="paginationEl" class="swiper-pagination-custom">
          </div>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<style>
.swiper-pagination-custom {
  display: flex;
  gap: 0.25rem;
  border: 1px solid #AA2132;
  padding: 0.25rem;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.2);
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 9999px;
  display: inline-block;
  margin: 0 !important;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.swiper-pagination-bullet-active {
  background-color: #AA2132;
  opacity: 1;
  width: 24px;
}
</style>
