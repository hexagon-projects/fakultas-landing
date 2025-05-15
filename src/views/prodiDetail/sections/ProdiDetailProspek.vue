<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';
import Org from '@/assets/org.png'
import ProspekCard from '../components/ProspekCard.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Prospek } from '@/core/types/prospek';
import type { Departement } from '@/core/types/departement';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  prospek: Prospek[]
  prodiDetail: Departement
}>();

const titleHTML = `Prospek Karir Program Studi <span class="text-colorPrimary font-bold">${props?.prodiDetail?.name}</span>`;
</script>

<template>
  <SectionLayout>
    <!-- Tablet & Dekstop -->
    <div class="w-full h-full md:flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 hidden">
      <div class="w-full md:w-[60%] space-y-4 md:space-y-6 lg:space-y-14">
        <div class="w-full flex flex-col text-center md:text-left gap-2 lg:gap-4">
          <p class="text-base font-medium">Peluang dan Jalur Professional</p>
          <TitleSection :text="titleHTML" :html="true" :delay="60" class="" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-14 flex-grow">
          <ProspekCard v-for="(card, index) in prospek" :key="index" :align-text="'text-left'" :title="card.title"
            :description="card.description" :icon="card.icon" />
        </div>
      </div>

      <div class="w-full md:w-[40%] flex group rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden">
        <img :src="getImageUrl(prodiDetail.image3)" alt="" class="w-full object-cover h-full group-hover:scale-105 transition duration-500">
      </div>
    </div>

    <!-- Mobile -->
    <div class="w-full h-full flex flex-col text-center md:text-left gap-2 lg:gap-4 md:hidden">
      <p class="text-base font-medium">Peluang dan Jalur Professional</p>
      <TitleSection :text="titleHTML" :html="true" :delay="60" class="" />
    </div>
    <div class="flex md:hidden flex-col gap-8">
      <div class="w-full md:w-[40%]">
        <img :src=Org alt="" class="w-full h-full lg:h-[80vh] object-cover">
      </div>
      <div class="w-full space-y-4">
        <ProspekCard v-for="(card, index) in prospek" :key="index" :align-text="'text-left'" :title="card.title"
          :description="card.description" :icon="card.icon" />
      </div>
    </div>
  </SectionLayout>
</template>
