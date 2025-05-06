<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import Calendar from '@/assets/icons/calendar.png'
import type { Faculty } from '@/core/types/fakultas';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  fakultas: Faculty;
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout>
    <div class="flex flex-col-reverse lg:flex-row lg:gap-10">
      <div class="lg:w-1/2 w-full">
        <div>
          <TitleSection v-if="fakultas.title2" class="mt-7" :text="`Sejarah ${fakultas.title2}`"></TitleSection>
          <p class="text-gray-500 mt-7 text-sm lg:text-base" v-html="fakultas.description2"></p>
          <div class="flex gap-5 lg:mt-10 mt-5">
            <InteractiveHoverButton text="Daftar Sekarang" />
            <InteractiveHoverButton text="Selengkapnya" bg-color="bg-transparent" textColor="text-colorPrimary"
              borderColor="border-colorPrimary" bgHover="bg-colorPrimary" textHover="text-white" />
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 w-full">
        <div class="w-full h-80 md:h-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px] relative">
          <div class="w-full h-full sjrh-container">
            <img :src="getImageUrl(fakultas.image2)" alt=""
              class="w-full h-full object-cover rounded-[16px] md:rounded-[24px] lg:rounded-[32px] sjrh-img" />
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

          <div
            class="w-fit flex justify-center items-center gap-4 absolute bottom-0 right-0 bg-colorPrimary p-2 lg:p-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px]">
            <div class="w-fit bg-white h-12 p-2 rounded-[2px] md:rounded-[4px] lg:rounded-[8px]">
              <img :src="Calendar" alt="" class="w-full h-full object-contain">
            </div>

            <div class="w-fit">
              <TextSection class="text-white">Berdiri Sejak <br> Tahun 1960</TextSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionLayout>
</template>

<style>
.sjrh-container {
  filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

@media (min-width: 320px) {
  .sjrh-img {
    clip-path: polygon(40% 100%, 40% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 360px) {
  .sjrh-img {
    clip-path: polygon(51% 100%, 51% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 440px) {
  .sjrh-img {
    clip-path: polygon(58% 100%, 58% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 460px) {
  .sjrh-img {
    clip-path: polygon(62% 100%, 62% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 560px) {
  .sjrh-img {
    clip-path: polygon(68% 100%, 68% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 680px) {
  .sjrh-img {
    clip-path: polygon(75% 100%, 75% 75%, 100% 75%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 768px) {
  .sjrh-img {
    clip-path: polygon(70% 100%, 70% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 868px) {
  .sjrh-img {
    clip-path: polygon(75% 100%, 75% 85%, 100% 85%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 968px) {
  .sjrh-img {
    clip-path: polygon(78% 100%, 78% 85%, 100% 85%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1024px) {
  .sjrh-img {
    clip-path: polygon(40% 100%, 40% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1124px) {
  .sjrh-img {
    clip-path: polygon(50% 100%, 50% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1224px) {
  .sjrh-img {
    clip-path: polygon(55% 100%, 55% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1324px) {
  .sjrh-img {
    clip-path: polygon(57% 100%, 57% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1400px) {
  .sjrh-img {
    clip-path: polygon(70% 100%, 70% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
  }
}
</style>
