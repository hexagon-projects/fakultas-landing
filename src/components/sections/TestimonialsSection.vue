<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import CardSpotlight from '@/components/ui/card-spotlight/CardSpotlight.vue';
import TitleSection from '@/components/TitleSection.vue';
import TextSection from '@/components/TextSection.vue';
import ButtonSection from '@/components/ButtonSection.vue';
import BorderBeam from '@/components/ui/border-beam/BorderBeam.vue';
import { computed, ref } from 'vue';
import type { Swiper as SwiperType } from 'swiper/types';
import type { Testimonial } from '@/core/types/testimoni';
import Gedung from '@/assets/gedung.jpg'
import { useSanitize } from '@/composables/useSanitize';
import InteractiveHoverButton from '../ui/interactive-hover-button/InteractiveHoverButton.vue';

defineProps<{
  testimoni: Testimonial[];
}>();

const baseUrl = import.meta.env.VITE_APP_IMG_URL;
const { sanitizeHtml } = useSanitize();

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return Gedung;
  return `${baseUrl}/${imagePath}`;
};

const modules = [Autoplay];
const activeIndex = ref(0);
const swiperInstance = ref<SwiperType | null>(null);

const handleSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper;
  activeIndex.value = swiper.realIndex;
};

const handleSlideChange = () => {
  if (swiperInstance.value) {
    activeIndex.value = swiperInstance.value.realIndex;
  }
};

const swiperOptions = {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  slideToClickedSlide: true,
  on: {
    slideChange: handleSlideChange,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
};

const primaryColorWithOpacity = computed(() => {
  return `rgba(var(--color-primary-r), var(--color-primary-g), var(--color-primary-b), 0.2)`;
});
</script>

<template>
  <SectionLayout>
    <div class="w-full text-center flex flex-col justify-center items-center gap-4">
      <div class="w-fit py-2 px-5 bg-colorPrimary/10 rounded-[8px] md:rounded-[16px] lg:rounded-[32px]">
        <p class="text-colorPrimary text-sm lg:text-base">Testimonials</p>
      </div>
      <TitleSection :text="'Apa Kata Mereka'"></TitleSection>
      <TextSection class="lg:max-w-2xl">Customers trust Chainex for secure automation and smart analytics. See
        how AI enhances their blockchain experience</TextSection>
    </div>
  </SectionLayout>

  <div class="w-full mb-12 md:mb-16 lg:mb-20">
    <swiper :modules="modules" :autoplay="swiperOptions.autoplay" :loop="swiperOptions.loop"
      :space-between="swiperOptions.spaceBetween" :centered-slides="swiperOptions.centeredSlides"
      :breakpoints="swiperOptions.breakpoints" @swiper="handleSwiper" @slide-change="handleSlideChange"
      class="testimonial-swiper">
      <swiper-slide v-for="(testimonial, index) in testimoni" :key="testimonial.id">
        <div class="relative overflow-hidden rounded-[8px] md:rounded-[16px] lg:rounded-[32px] mx-[30px] md:mx-0">
          <CardSpotlight
            class="w-full cursor-pointer flex flex-col justify-center items-center text-center p-5 lg:p-10 rounded-[8px] md:rounded-[16px] lg:rounded-[32px]"
            :gradient-color="primaryColorWithOpacity">
            <div class="w-full flex justify-center items-center mb-4 md:mb-6">
              <img :src="getImageUrl(testimonial.image)" :alt="testimonial.name"
                class="w-10 h-10 lg:w-20 lg:h-20 rounded-full object-cover">
            </div>
            <TextSection class="text-black/60 mb-4 md:mb-6"><span v-html="sanitizeHtml(testimonial.description)"></span></TextSection>
            <div class="space-y-2">
              <TextSection :weightText="'font-bold'">{{ testimonial.name }}</TextSection>
              <!-- <TextSection class="text-black/60">{{ testimonial.role }}</TextSection> -->
            </div>
          </CardSpotlight>
          <BorderBeam v-if="activeIndex === index" :size="250" :duration="10" :delay="0" :border-width="3"
            :size-second="250" :duration-second="6" :delay-second="0" :anchor-second="75" :enable-second-border="true" :start-position-second="50" />
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <div class="w-full flex justify-center items-center">
    <!-- <ButtonSection>Lihat Lainnya</ButtonSection> -->
    <InteractiveHoverButton :text="'Lihat Lainnya'"></InteractiveHoverButton>
  </div>
</template>

<style>
.testimonial-swiper {
  --swiper-theme-color: theme('colors.fakultas');
}

.swiper-slide {
  opacity: 0.5;
  transition: opacity 0.6s ease;
}

.swiper-slide-active {
  opacity: 1;
}
</style>
