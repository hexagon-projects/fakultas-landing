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

const halfLength = Math.ceil(props?.prospek?.length / 2);
const leftCards = props?.prospek?.slice(0, halfLength);
const rightCards = props?.prospek?.slice(halfLength);
</script>

<template>
  <SectionLayout>
    <div class="w-full h-full flex flex-col justify-center items-center gap-2 lg:gap-4 text-center">
      <p class="text-base font-medium">Peluang dan Jalur Professional</p>
      <TitleSection :text="titleHTML" :html="true" :delay="60" class="lg:max-w-[680px]" />
    </div>

    <div
      class="w-full h-full lg:h-[80vh] lg:flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 lg:gap-6 hidden">
      <div class="w-full md:w-[30%] h-full flex flex-col justify-around gap-4 ">
        <ProspekCard v-for="(card, index) in leftCards" :key="'left-' + index" :title="card.title" :description="card.description" :icon="card.icon" />
      </div>
      <div class="w-full md:w-[40%]">
        <img :src=Org alt="" class="w-full h-full lg:h-[80vh] object-cover">
      </div>
      <div class="w-full md:w-[30%] h-full flex flex-col justify-around gap-4 ">
        <ProspekCard v-for="(card, index) in rightCards" :key="index" :direction="'left-0'" :rounded-align="'rounded-r-[8px]'" :title="card.title" :description="card.description" :icon="card.icon" />
      </div>
    </div>

    <div class="flex lg:hidden flex-col gap-8">
      <div class="w-full md:w-[40%] mx-auto">
        <img :src=Org alt="" class="w-full h-full lg:h-[80vh] object-cover">
      </div>
      <div class="w-full space-y-4">
        <ProspekCard v-for="(card, index) in prospek" :key="index" :direction="'left-0'" :rounded-align="'rounded-r-[8px]'" :title="card.title" :description="card.description" :icon="card.icon" />
      </div>
    </div>
  </SectionLayout>
</template>
