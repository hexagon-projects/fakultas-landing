<script lang="ts" setup>
import TitleSection from '@/components/TitleSection.vue';
import TextBody from '@/components/TextBody.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import type { Kurikulum } from '@/core/types/kurikulum';
import Vector from '@/assets/vector.png'
import BorderBeam from '@/components/ui/border-beam/BorderBeam.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  kurikulum: Kurikulum[]
}>();

</script>

<template>
  <SectionLayout>
    <div class="w-full flex justify-center items-center">
      <TitleSection class="text-colorPrimary" :text="'Kurikulum Terintegrasi'"></TitleSection>
    </div>

    <div class="hidden lg:grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
      <div v-for="(feature, index) in kurikulum" :key="index"
        class="group flex flex-col h-full gap-4 md:gap-5 lg:gap-6 justify-start relative p-5 overflow-hidden lg:p-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] bg-gradient-to-tl from-colorPrimary/30 via-transparent to-transparent">
        <div class="flex gap-4 md:gap-5 lg:gap-6">
          <div class="h-full flex flex-col justify-between gap-4 md:gap-5 lg:gap-6">
            <img :src="Vector" alt="" class="w-12 h-9">
            <h6 class="text-[18px] md:text-[22px] lg:text-[26px] font-bold">{{ feature.title }}</h6>
            <TextBody><span v-html="feature.description"></span></TextBody>
          </div>

          <div class="w-[25%] absolute bottom-0 right-0">
            <img :src="getImageUrl(feature.icon)" alt="" class="w-full h-full object-contain">
          </div>

          <div class="w-full">
          </div>
        </div>
        <BorderBeam class="opacity-0 group-hover:opacity-100 transition-opacity duration-300" :size="400" :duration="10"
          :delay="9" :border-width="3" />
      </div>
    </div>

    <div class="lg:hidden grid grid-flow-row-dense grid-cols-1 gap-4 md:gap-5 lg:gap-6">
      <div v-for="(feature, index) in kurikulum" :key="index"
        class="group flex flex-col h-full gap-4 md:gap-5 lg:gap-6 justify-start relative p-5 overflow-hidden lg:p-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] bg-gradient-to-tl from-colorPrimary/30 via-transparent to-transparent">
        <div class="flex gap-4 md:gap-5 lg:gap-6">
          <div class="space-y-4 md:space-y-5 lg:space-y-6 pb-16">
            <img :src="Vector" alt="" class="w-6 h-3">
            <h6 class="text-[18px] md:text-[22px] lg:text-[26px] font-bold">{{ feature.title }}</h6>
            <TextBody><span v-html="feature.description"></span></TextBody>
          </div>

          <div class="w-[25%] absolute bottom-0 right-0">
            <img :src="getImageUrl(feature.icon)" alt="" class="w-full h-full object-contain">
          </div>
        </div>
        <BorderBeam class="opacity-0 group-hover:opacity-100 transition-opacity duration-300" :size="400" :duration="10"
          :delay="9" :border-width="3" />
      </div>
    </div>
  </SectionLayout>
</template>
