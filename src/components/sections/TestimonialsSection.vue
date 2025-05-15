<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import TitleSection from '@/components/TitleSection.vue';
import TextSection from '@/components/TextSection.vue';
import type { Testimonial } from '@/core/types/testimoni';
import Gedung from '@/assets/gedung.jpg'
import InteractiveHoverButton from '../ui/interactive-hover-button/InteractiveHoverButton.vue';
import Dots from '@/assets/dots.svg'
import TextBody from '../TextBody.vue';
import { ref, computed } from 'vue';

const props = defineProps<{
  testimoni: Testimonial[];
}>();

// Perubahan utama: Tambahkan computed property untuk membatasi testimoni
const limitedTestimoni = computed(() => {
  return props.testimoni?.slice(0, 5) || [];
});

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
  <div class="bg-[#EFF0F0]">
    <SectionLayout>
      <div class="w-full text-center flex flex-col justify-center items-center gap-4">
        <div class="w-fit py-2 px-5 bg-colorPrimary/10 rounded-[8px] md:rounded-[16px] lg:rounded-[32px]">
          <p class="text-colorPrimary text-sm lg:text-base">Testimonials</p>
        </div>
        <TitleSection :text="'Apa Kata Mereka'"></TitleSection>
        <TextSection class="lg:max-w-2xl">Customers trust Chainex for secure automation and smart analytics. See
          how AI enhances their blockchain experience</TextSection>
      </div>

      <div class="relative">
        <!-- Perubahan: testimoni -> limitedTestimoni -->
        <swiper v-if="limitedTestimoni.length > 0" :modules="modules" :effect="'fade'" :fade-effect="{
          crossFade: true
        }" :loop="true" :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }" :space-between="50" @swiper="onSwiper" @slide-change="onSlideChange" :navigation="{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }" class="w-full">
          <!-- Perubahan: testimoni -> limitedTestimoni -->
          <swiper-slide v-for="(item, index) in limitedTestimoni" :key="index">
            <div
              class="w-full flex flex-col md:flex-row-reverse justify-center items-center md:justify-between gap-6 md:gap-12 lg:gap-24">
              <div
                class="w-full md:w-[40%] h-fit rounded-[16px] md:rounded-[24px] lg:rounded-[32px] group overflow-hidden relative bg-white p-4 md:p-6 lg:p-8 hidden md:block">
                <p class="text-[12px] md:text-[16px] lg:text-[20px]"><span v-html="item.description"></span>
                </p>
              </div>

              <div class="w-full md:w-[70%] space-y-4 md:space-y-5 lg:space-y-6">
                <div class="w-16 h-16 lg:w-32 lg:h-32 rounded-full mx-auto md:mx-0">
                  <img :src="getImageUrl(item.image)" :alt="item.name" class="h-full w-full object-cover rounded-full">
                </div>

                <div class="flex flex-col justify-center items-center md:justify-start md:items-start gap-3 lg:gap-3">
                  <div class="flex gap-2">
                    <img :src="Dots" alt="" class="w-5">
                    <TextSection class="text-[#FF443D]">{{ item.name }}</TextSection>
                  </div>
                  <h5
                    class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight text-center md:text-left">
                    <span v-html="item.title"></span></h5>
                </div>

                <div
                  class="w-full md:w-[40%] h-fit rounded-[16px] md:rounded-[24px] lg:rounded-[32px] group overflow-hidden relative bg-white p-4 md:p-6 lg:p-8 md:hidden">
                  <p class="text-[12px] md:text-[16px] lg:text-[20px] line-clamp-6"><span
                      v-html="item.description"></span></p>
                </div>

                <div>
                  <TextBody class="text-colorPrimary">Baca Selengkapnya </TextBody>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="w-full flex justify-between items-center mt-6">
        <!-- pagination -->
        <!-- Perubahan: testimoni -> limitedTestimoni -->
        <div class="flex gap-2">
          <div v-for="(item, index) in limitedTestimoni" :key="index" class="w-10 h-[5px] rounded-[8px] cursor-pointer"
            :class="index === activeSlideIndex % limitedTestimoni.length ? 'bg-colorPrimary' : 'bg-[#444444]/50'"
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

      <div class="w-full flex justify-center items-center">
        <InteractiveHoverButton @click="$router.push('/testimoni')" :text="'Lihat Lainnya'"></InteractiveHoverButton>
      </div>
    </SectionLayout>
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
