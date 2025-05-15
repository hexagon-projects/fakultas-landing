<script setup lang="ts">
import SectionLayout from '@/layouts/SectionLayout.vue';
import Org from '@/assets/org.png'
import ProspekCard from '../components/ProspekCard.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Prospek } from '@/core/types/prospek';
import type { Departement } from '@/core/types/departement';

const props = defineProps<{
  prospek: Prospek[]
  prodiDetail: Departement
}>();

const titleHTML = `Prospek Karir Program Studi <span class="text-colorPrimary font-bold">${props?.prodiDetail?.name}</span>`;
</script>

<template>
  <SectionLayout>
    <div class="w-full h-full flex flex-col justify-center items-center gap-2 lg:gap-4 text-center">
      <div class="py-2 px-4 rounded-full border border-colorPrimary">
        <p class="text-[10px] md:text-[12px] lg: font-medium text-colorPrimary">Peluang dan Jalur Professional</p>
      </div>
      <TitleSection :text="titleHTML" :html="true" :delay="60" class="lg:max-w-[680px]" />
    </div>

    <div
      class="w-full md:w-[80%] lg:w-[75%] mx-auto h-full lg:h-[80vh] md:flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-14 hidden">
      <div class="w-full md:w-[45%]">
        <img :src=Org alt="" class="w-full h-full lg:h-[80vh] object-cover">
      </div>
      <div class="w-full md:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-10">
        <ProspekCard v-for="(card, index) in prospek" :key="index" :align-text="'text-left'"
          :title="card.title" :description="card.description" :icon="card.icon" />
      </div>
    </div>

    <div class="flex md:hidden flex-col gap-8">
      <div class="w-full md:w-[40%]">
        <img :src=Org alt="" class="w-full h-full lg:h-[80vh] object-cover">
      </div>
      <div class="w-full space-y-4">
        <ProspekCard v-for="(card, index) in prospek" :key="'right-' + index" :align-text="'text-left'"
          :title="card.title" :description="card.description" :icon="card.icon" />
      </div>
    </div>
  </SectionLayout>
</template>
