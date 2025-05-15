<script setup lang="ts">
import ContactAdminButton from '@/components/ContactAdminButton.vue';
import TextSection from '@/components/TextSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import type { Departement } from '@/core/types/departement';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  prodiDetail: Departement | null;
  isLoading?: boolean;
}>();
</script>

<template>
  <div class="w-full p-0 md:px-[24px] md:py-[24px] lg:px-[32px] lg:py-[32px] mb-12 md:mb-0">
    <div class="w-full h-[80vh] lg:h-[80vh] relative">
      <template v-if="isLoading">
        <div class="w-full h-full bg-gray-300 animate-pulse rounded-b-[8px] md:rounded-[16px] lg:rounded-[32px]"></div>
      </template>
      <template v-else-if="prodiDetail">
        <div class="w-full h-full relative flex flex-col justify-center md:px-[64px]">
          <div class="w-full h-full prodi-container absolute inset-0">
            <img :src="getImageUrl(prodiDetail.image1)" :alt="prodiDetail.name"
              class="w-full h-full object-cover rounded-b-[8px] md:rounded-[16px] lg:rounded-[32px] prodi-box">

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
            <div
              class="absolute inset-0 bg-gradient-to-r from-colorPrimary/70 via-colorPrimary/10 to-transparent rounded-b-[8px] md:rounded-[16px] lg:rounded-[32px] hidden md:block prodi-box">
            </div>
          </div>

          <div
            class="absolute inset-0 bg-gradient-to-t from-colorPrimary/80 via-colorPrimary/10 to-transparent rounded-b-[8px] md:rounded-[16px] lg:rounded-[32px] md:hidden">
          </div>

          <div class="w-full md:w-1/2 space-y-4 md:space-y-6 lg:space-y-8">
            <h1
              class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight text-center md:text-left text-white animate-fade-in-left">
              {{ prodiDetail.tagline }}</h1>
            <div
              class="w-fit px-10 py-6 bg-white/25 backdrop-blur-lg rounded-[4px] md:rounded-[8px] lg:rounded-[16px] items-center animate-fade-in-bottom  hidden md:flex">
              <div class="border-white/25 text-white px-10">
                <h6 class="text-[18px] md:text-[20px] lg:text-[22px] font-medium">Akreditasi</h6>
                <TextSection :weight-text="'font-light'">{{ prodiDetail.akreditasi }}</TextSection>
              </div>
              <div class="border-l-2 border-r-2 border-white/25 text-white px-10">
                <h6 class="text-[18px] md:text-[20px] lg:text-[22px] font-medium">Fasilitas</h6>
                <TextSection :weight-text="'font-light'">Modern</TextSection>
              </div>
              <div class="border-white/25 text-white px-10">
                <h6 class="text-[18px] md:text-[20px] lg:text-[22px] font-medium">Dosen</h6>
                <TextSection :weight-text="'font-light'">Berpengalaman</TextSection>
              </div>
            </div>
          </div>

          <!-- Mobile -->
          <div
            class="w-fit mx-auto flex justify-center md:hidden absolute -bottom-10 left-0 right-0 gap-4 md:gap-5 lg:gap-6 animate-fade-in-bottom bg-white p-4 rounded-full">
            <a href="https://registrasi.unpas.ac.id/register" target="_blank">
              <InteractiveHoverButton :text="'Daftar Sekarang'" />
            </a>
            <ContactAdminButton :bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'"
              :border-color="'border-colorPrimary'" :text="'Hubungi Admin'" :text-color="'text-colorPrimary'"
              :text-hover="'group-hover:text-white'" />
          </div>

          <!-- Dekstop -->
          <div class="absolute bottom-0 right-0 gap-4 md:gap-5 lg:gap-6 animate-fade-in-bottom hidden md:flex">
            <a href="https://registrasi.unpas.ac.id/register" target="_blank">
              <InteractiveHoverButton :text="'Daftar Sekarang'" />
            </a>
            <ContactAdminButton :bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'"
              :border-color="'border-colorPrimary'" :text="'Hubungi Admin'" :text-color="'text-colorPrimary'"
              :text-hover="'group-hover:text-white'" />
          </div>
        </div>
        <!-- <img :src="getImageUrl(prodiDetail.image1)" alt=""
          class="w-full h-full object-cover rounded-b-[8px] md:rounded-[16px] lg:rounded-[32px]">

        <div
          class="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:bottom-0 md:top-auto md:left-0 md:transform-none md:p-14 p-14 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">

          <div class="w-full md:w-1/2 lg:w-[60%] animate-fade-in-left">
            <h1 class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight text-center md:text-left text-white">Program Studi {{
              prodiDetail?.name }} Unggulan untuk Masa Depan Anda</h1>
          </div>

          <div
            class="w-full md:w-1/2 lg:w-[30%] flex flex-col md:items-end gap-4 md:gap-6 lg:gap-8 animate-fade-in-bottom">
            <TextSection class="text-white text-center md:text-right hidden md:block">
              {{ prodiDetail?.tagline }}
            </TextSection>
            <div class="w-full flex gap-4 md:gap-5 lg:gap-6 justify-center items-center md:justify-end md:items-end">
              <a href="https://registrasi.unpas.ac.id/register" target="_blank">
                <InteractiveHoverButton :text="'Daftar Sekarang'" />
              </a>
              <ContactAdminButton :bg-color="'bg-transparent'" :bg-hover="'bg-white'" :border-color="'border-white'"
              :text="'Hubungi Admin'" :text-color="'text-white'" :text-hover="'group-hover:text-colorPrimary'"/>
            </div>
          </div>
        </div> -->
      </template>
    </div>
  </div>
</template>

<style scoped>
/* .prodi-container {
  filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.prodi-box {
  clip-path: polygon(75% 100%, 75% 80%, 100% 80%, 100% 0%, 0% 0%, 0% 100%);
} */

@media (min-width: 768px) {
  .prodi-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
  }

  .prodi-box {
    clip-path: polygon(56% 100%, 56% 90%, 100% 90%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 868px) {
  .prodi-box {
    clip-path: polygon(60% 100%, 60% 90%, 100% 90%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 968px) {
  .prodi-box {
    clip-path: polygon(64% 100%, 64% 90%, 100% 90%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1024px) {
  .prodi-box {
    clip-path: polygon(62% 100%, 62% 88%, 100% 88%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1124px) {
  .prodi-box {
    clip-path: polygon(66% 100%, 66% 88%, 100% 88%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1224px) {
  .prodi-box {
    clip-path: polygon(68% 100%, 68% 88%, 100% 88%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1324px) {
  .prodi-box {
    clip-path: polygon(72% 100%, 72% 88%, 100% 88%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1400px) {
  .prodi-box {
    clip-path: polygon(74% 100%, 74% 88%, 100% 88%, 100% 0%, 0% 0%, 0% 100%);
  }
}

@media (min-width: 1500px) {
  .prodi-box {
    clip-path: polygon(76% 100%, 76% 88%, 100% 88%, 100% 0%, 0% 0%, 0% 100%);
  }
}

.animate-fade-in-left {
  animation: fadeInLeft 1s ease-out forwards;
}

.animate-fade-in-bottom {
  animation: fadeInBottom 1s ease-out forwards;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-70px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(70px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
