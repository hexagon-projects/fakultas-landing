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
  <div class="w-full p-0 md:px-[24px] md:py-[24px] lg:px-[32px] lg:py-[32px]">
    <div class="w-full h-[80vh] lg:h-[80vh] relative">
      <template v-if="isLoading">
        <div class="w-full h-full bg-gray-300 animate-pulse rounded-b-[32px] md:rounded-[16px] lg:rounded-[32px]"></div>
      </template>
      <template v-else-if="prodiDetail">
        <div class="w-full h-full prodi-container">
          <img :src="getImageUrl(prodiDetail.image1)" alt=""
            class="absolute inset-0 w-full h-full object-cover rounded-b-[32px] md:rounded-[16px] lg:rounded-[32px] prodi-box">
        </div>

        <div
          class="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:p-14 p-14 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div class="w-full md:w-1/2 lg:w-[60%] animate-fade-in-left space-y-4 lg:space-y-6">
            <h1
              class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight text-center md:text-left text-white line-clamp-3">
              {{ prodiDetail.tagline }}</h1>

            <div
              class="flex gap-4 md:gap-5 lg:gap-6 justify-center items-center md:justify-start md:items-start animate-fade-in-right">
              <a href="https://registrasi.unpas.ac.id/register" target="_blank">
                <InteractiveHoverButton :text="'Daftar Sekarang'" />
              </a>
              <ContactAdminButton :bg-color="'bg-transparent'" :bg-hover="'bg-white'" :border-color="'border-white'"
                :text="'Hubungi Admin'" :text-color="'text-white'" :text-hover="'group-hover:text-colorPrimary'" />
            </div>
          </div>
        </div>

        <div
          class="absolute bottom-0 left-0 w-fit px-10 py-6 bg-colorPrimary/25 backdrop-blur-lg rounded-[4px] md:rounded-[8px] lg:rounded-[16px] items-center animate-fade-in-bottom hidden md:flex info-box">
          <div class="border-white/25 text-[#444444] px-10">
            <h6 class="text-[18px] md:text-[20px] lg:text-[22px] font-medium">Akreditasi</h6>
            <TextSection :weight-text="'font-light'">{{ prodiDetail.akreditasi }}</TextSection>
          </div>
          <div class="border-l-2 border-r-2 border-white/25 text-[#444444] px-10">
            <h6 class="text-[18px] md:text-[20px] lg:text-[22px] font-medium">Fasilitas</h6>
            <TextSection :weight-text="'font-light'">Modern</TextSection>
          </div>
          <div class="border-white/25 text-[#444444] px-10">
            <h6 class="text-[18px] md:text-[20px] lg:text-[22px] font-medium">Dosen</h6>
            <TextSection :weight-text="'font-light'">Berpengalaman</TextSection>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
@media (min-width: 768px) {
  .prodi-container {
    filter: url("#goo") drop-shadow(0px -2px 0px transparent)
  }

  .prodi-box {
    clip-path: polygon(0% 82%, 82% 82%, 88% 100%, 100% 100%, 100% 0%, 0% 0%);
  }

  .info-box {
    clip-path: polygon(93% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%);
  }
}

@media (min-width: 868px) {
  .prodi-box {
    clip-path: polygon(0% 82%, 68% 82%, 74% 100%, 100% 100%, 100% 0%, 0% 0%);
  }

  .info-box {
    clip-path: polygon(93% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%);
  }
}

@media (min-width: 968px) {
  .prodi-box {
    clip-path: polygon(0% 82%, 66% 82%, 72% 100%, 100% 100%, 100% 0%, 0% 0%);
  }

  .info-box {
    clip-path: polygon(93% 0%, 100% 100%, 100% 100%, 0% 100%, 0% 0%);
  }
}

@media (min-width: 1024px) {
  .prodi-box {
    clip-path: polygon(0% 82%, 64% 82%, 70% 100%, 100% 100%, 100% 0%, 0% 0%);
  }
}

@media (min-width: 1124px) {
  .prodi-box {
    clip-path: polygon(0% 82%, 60% 82%, 66% 100%, 100% 100%, 100% 0%, 0% 0%);
  }
}

@media (min-width: 1224px) {
  .prodi-box {
    clip-path: polygon(0% 80%, 54% 80%, 60% 100%, 100% 100%, 100% 0%, 0% 0%);
  }
}

@media (min-width: 1324px) {
  .prodi-box {
    clip-path: polygon(0% 82%, 50% 82%, 56% 100%, 100% 100%, 100% 0%, 0% 0%);
  }
}

@media (min-width: 1400px) {
  .prodi-box {
    clip-path: polygon(0% 82%, 48% 82%, 52% 100%, 100% 100%, 100% 0%, 0% 0%);
  }
}

@media (min-width: 1500px) {
  .prodi-box {
    clip-path: polygon(0% 82%, 38% 82%, 42% 100%, 100% 100%, 100% 0%, 0% 0%);
  }
}

.animate-fade-in-left {
  animation: fadeInLeft 1s ease-out forwards;
}

.animate-fade-in-right {
  animation: fadeInRight 1s ease-out forwards;
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

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(70px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
