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
import Coma from '@/assets/coma.svg'
import { ref, computed } from 'vue';

const props = defineProps<{
  testimoni: Testimonial[];
}>();

const baseUrl = import.meta.env.VITE_APP_IMG_URL;
const activeSlideIndex = ref(0);
const swiperInstance = ref<any>(null);
const showVideoPopup = ref(false);
const currentVideoId = ref('');

const limitedTestimoni = computed(() => {
  return props.testimoni?.slice(0, 5);
});

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

const openVideoPopup = (videoId: string) => {
  currentVideoId.value = videoId;
  showVideoPopup.value = true;
};

const closeVideoPopup = () => {
  showVideoPopup.value = false;
  currentVideoId.value = '';
};
</script>

<template>
  <div class="bg-[#EFF0F0]">
    <SectionLayout>
      <Transition name="fade">
        <div v-if="showVideoPopup"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          @click="closeVideoPopup">
          <div class="relative mx-4 aspect-video w-full max-w-4xl md:mx-0" @click.stop>
            <button @click="closeVideoPopup"
              class="absolute -top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div
              class="relative isolate z-[1] size-full overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px] border-2 border-white">
              <iframe :src="`https://www.youtube.com/embed/${currentVideoId}`"
                class="size-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px]" allowfullscreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
            </div>
          </div>
        </div>
      </Transition>

      <div class="w-full text-center flex flex-col justify-center items-center gap-4">
        <div class="w-fit py-2 px-5 bg-colorPrimary/10 rounded-[8px] md:rounded-[16px] lg:rounded-[32px]">
          <p class="text-colorPrimary text-sm lg:text-base">Testimonials</p>
        </div>
        <TitleSection :text="'Apa Kata Mereka'"></TitleSection>
        <TextSection class="lg:max-w-2xl">Customers trust Chainex for secure automation and smart analytics. See
          how AI enhances their blockchain experience</TextSection>
      </div>

      <div class="relative">
        <swiper v-if="limitedTestimoni.length > 0" :modules="modules" :effect="'fade'" :fade-effect="{
          crossFade: true
        }" :loop="true" :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }" :space-between="50" @swiper="onSwiper" @slide-change="onSlideChange" :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }" class="w-full">
          <swiper-slide v-for="(item, index) in limitedTestimoni" :key="index">
            <div
              class="w-full flex flex-col md:flex-row-reverse justify-center items-center md:justify-between gap-6 md:gap-12 lg:gap-24">
              <div
                class="w-full md:w-[40%] h-[312px] md:h-[434px] lg:h-[568px] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] group overflow-hidden relative">
                <div
                  class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
                </div>
                <img :src="getImageUrl(item.image)" :alt="item.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition duration-500">

                <div
                  class="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 text-white z-20 flex justify-between items-center gap-2 md:gap-4">
                  <div class="w-full space-y-2">
                    <TextSection :weight-text="'font-bold'">{{ item.name }}</TextSection>
                    <p class="text-[10px] md:text-[12px] lg:text-[14px] font-light">{{ item.title }}</p>
                  </div>

                  <button v-if="item.yt" @click="openVideoPopup(item.yt)"
                    class="w-[50px] h-[40px] lg:w-[58px] lg:h-[48px] bg-black/30 backdrop-blur-sm rounded-full  hover:scale-105 transition duration-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 " viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="w-full md:w-[70%] space-y-[14px] lg:space-y-[70px]">
                <div class="space-y-5 lg:space-y-10">
                  <img :src="Coma" alt="" class="w-5 md:w-10 svg-primary">
                  <h5 class="font-light md:font-bold text-[14px] md:text-[20px] lg:text-[22px]"><span
                      v-html="item.description"></span></h5>
                </div>

                <div>
                  <p class="text-[14px] md:text-[14px] lg:text-[16px] text-colorPrimary">Baca Selengkapnya </p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="w-full flex justify-between items-center mt-6">
        <!-- pagination -->
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
