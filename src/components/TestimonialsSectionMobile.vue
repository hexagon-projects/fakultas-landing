<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import TextSection from '@/components/TextSection.vue';
import type { Testimonial } from '@/core/types/testimoni';
import Gedung from '@/assets/gedung.jpg'
import { ref } from 'vue';

defineProps<{
  testimoni: Testimonial[];
}>();

const baseUrl = import.meta.env.VITE_APP_IMG_URL;
const activeSlideIndex = ref(0);
const swiperInstance = ref<any>(null);

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return Gedung;
  return `${baseUrl}/${imagePath}`;
};

const modules = [EffectFade, Navigation, Pagination, Autoplay];

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

const onSlideChange = (swiper: any) => {
  activeSlideIndex.value = swiper.realIndex;
};

const goToSlide = (index: number) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideToLoop(index);
  }
};

const nextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
  }
};

const prevSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
  }
};
</script>

<template>
  <div class="px-[20px] md:px-[60px] lg:px-[120px]">
    <div class="relative">
      <swiper v-if="testimoni.length > 0" :modules="modules" :effect="'fade'" :fade-effect="{
        crossFade: true
      }" :loop="true" :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }" :space-between="50" @swiper="onSwiper" @slide-change="onSlideChange" :navigation="{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }" class="w-full">
        <swiper-slide v-for="(item, index) in testimoni" :key="index">
          <div
            class="w-full flex flex-col md:flex-row-reverse justify-center items-center md:justify-between gap-6 md:gap-12 lg:gap-24">
            <div
              class="w-full md:w-[40%] h-[312px] md:h-[434px] lg:h-[568px] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] group overflow-hidden relative">
              <div
                class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
              </div>
              <img :src="getImageUrl(item.image)" :alt="item.name"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
              <div class="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 text-white z-20 space-y-2">
                <TextSection :weight-text="'font-bold'">{{ item.name }}</TextSection>
                <p class="text-[10px] md:text-[12px] lg:text-[14px] font-light">{{ item.title }}</p>
              </div>
            </div>

            <div class="w-full md:w-[70%] space-y-[35px] lg:space-y-[70px]">
              <div class="space-y-4 lg:space-y-10">
                <p class="font-light text-[14px] md:text-[20px] lg:text-[22px]"><span v-html="item.description"></span>
                </p>
                <div class="space-y-1">
                  <TextSection>{{ item.name }}</TextSection>
                  <p class="text-[12px] md:text-[12px] lg:text-[14px] font-light">{{ item.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="w-full flex justify-between items-center mt-6">
      <!-- pagination -->
      <div class="flex gap-2">
        <div v-for="(item, index) in testimoni" :key="index" class="w-10 h-[5px] rounded-[8px] cursor-pointer"
          :class="index === activeSlideIndex % testimoni.length ? 'bg-colorPrimary' : 'bg-[#444444]/50'"
          @click="goToSlide(index)"></div>
      </div>

      <!-- navigation for mobile -->
      <div class="flex gap-4">
        <div
          class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-transparent border border-colorPrimary cursor-pointer flex items-center justify-center"
          @click="prevSlide">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-colorPrimary"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div
          class="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full bg-transparent border border-colorPrimary cursor-pointer flex items-center justify-center"
          @click="nextSlide">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-colorPrimary"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.swiper-button-prev:after,
.swiper-button-next:after {
  display: none;
}

.swiper-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.swiper-slide {
  opacity: 0 !important;
  transition: opacity 0.5s ease-in-out;
}

.swiper-slide-active,
.swiper-slide-duplicate-active {
  opacity: 1 !important;
}
</style>
