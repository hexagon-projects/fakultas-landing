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
        <div class="w-full h-full bg-gray-300 animate-pulse rounded-b-[8px] md:rounded-[16px] lg:rounded-[32px]"></div>
      </template>
      <template v-else-if="prodiDetail">
        <img :src="getImageUrl(prodiDetail.image1)" alt=""
          class="w-full h-full object-cover rounded-b-[8px] md:rounded-[16px] lg:rounded-[32px]">
        <div class="absolute inset-0 bg-black/50 rounded-b-[8px] md:rounded-[16px] lg:rounded-[32px]"></div>

        <div
          class="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:bottom-0 md:top-auto md:left-0 md:transform-none md:p-14 p-14 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <!-- Div ini Muncul dari kiri -->
          <div class="w-full md:w-1/2 lg:w-[60%] animate-fade-in-left">
            <h1 class="text-[22px] md:text-[34px] lg:text-[46px] font-bold leading-tight text-center md:text-left text-white">Program Studi {{
              prodiDetail?.name }} Unggulan untuk Masa Depan Anda</h1>
          </div>

          <!-- Div ini Muncul Dari Kanan -->
          <div
            class="w-full md:w-1/2 lg:w-[30%] flex flex-col md:items-end gap-4 md:gap-6 lg:gap-8 animate-fade-in-right">
            <TextSection class="text-white text-center md:text-right hidden md:block">
              {{ prodiDetail?.tagline }}
            </TextSection>
            <div class="w-full flex gap-4 md:gap-5 lg:gap-6 justify-center items-center md:justify-end md:items-end">
              <a href="https://registrasi.unpas.ac.id/register" target="_blank">
                <InteractiveHoverButton :text="'Daftar Sekarang'" />
              </a>
              <ContactAdminButton :bg-color="'bg-transparent'" :bg-hover="'bg-white'" :border-color="'border-white'"
              :text="'Hubungi Admin'" :text-color="'text-white'" :text-hover="'group-hover:text-colorPrimary'"/>
              <!-- <InteractiveHoverButton :bg-color="'bg-transparent'" :bg-hover="'bg-white'" :border-color="'border-white'"
                :text="'Hubungi Admin'" :text-color="'text-white'" :text-hover="'group-hover:text-colorPrimary'" /> -->
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
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
