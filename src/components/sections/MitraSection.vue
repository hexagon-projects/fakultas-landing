<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import TextSection from '../TextSection.vue';
import TitleSection from '../TitleSection.vue';
import type { Partner } from '@/core/types/partner';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  partners: Partner
}>();

const modules = [Pagination, Autoplay];
const titleHTML = 'Mitra <span class="text-colorPrimary">Kerjasama</span>';
</script>

<template>
  <div>
    <div class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
      <div class="w-full flex justify-center items-center">
        <TitleSection :text="titleHTML" :html="true" :delay="60" />
      </div>
    </div>

    <div class="lg:mb-10 px-4">
      <swiper :modules="modules" :slides-per-view="3" :space-between="30" :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }" :pagination="{
          clickable: true,
          bulletClass: 'custom-bullet',
          bulletActiveClass: 'custom-bullet-active',
          dynamicBullets: true,
          dynamicMainBullets: 3
        }" :breakpoints="{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }">
        <swiper-slide v-for="partner in partners" :key="partner?.id">
          <div
            class="h-24 lg:h-40 flex items-center justify-center lg:mb-10">
            <img :src="getImageUrl(partner?.image || '')" :alt="partner?.name" class="w-full h-full object-cover rounded-[6px] md:rounded-[12px] lg:rounded-[24px]" />
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="w-full flex justify-center items-center px-[30px] md:px-[60px] lg:px-[120px]">
      <TextSection class="mb-12 md:mb-16 lg:mb-20 lg:max-w-xl text-center">Highlighting our successful collaborations
        with top-tier clients and their transformative projects.</TextSection>
    </div>
  </div>
</template>

<style>
.swiper-pagination {
  position: relative;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem;
}

.custom-bullet {
  width: 40px;
  height: 6px;
  display: inline-block;
  border-radius: 3px;
  background: #DDD;
  opacity: 1;
  cursor: pointer;
  transition: all 0.3s ease;
}

.custom-bullet-active {
  background: var(--fakultas-color, #AA2132);
  width: 40px;
  height: 6px;
}

@media (min-width: 640px) {
  .custom-bullet {
    width: 50px;
    height: 8px;
  }

  .custom-bullet-active {
    width: 50px;
    height: 8px;
  }
}

@media (max-width: 767px) {
  .custom-bullet,
  .custom-bullet-active {
    display: none;
  }
}

@media (min-width: 1024px) {
  .swiper-pagination {
    margin-top: 4rem;
  }

  .custom-bullet {
    width: 70px;
    height: 10px;
  }

  .custom-bullet-active {
    width: 70px;
    height: 10px;
  }
}
</style>
