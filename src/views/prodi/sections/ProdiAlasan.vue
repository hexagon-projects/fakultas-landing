<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Faculty } from '@/core/types/fakultas';
import type { Unggulan } from '@/core/types/unggulan';
import Gedung from '@/assets/gedung.jpg'
import { computed } from 'vue';
import TextBody from '@/components/TextBody.vue';
import Puzzle from '@/assets/puzzle.png';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return Gedung;
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  unggulan: Unggulan[];
  fakultas: Faculty | null;
}>();

const titleHTML = computed(() => {
  if (!props.fakultas?.name) return 'Kenapa Harus Memilih Unpas';
  return `Kenapa Harus Memilih <span class="text-colorPrimary font-bold">${props.fakultas.name || ''}</span> Unpas`;
});
</script>

<template>
  <div
    class="w-full px-[20px] py-[22px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full flex justify-center items-center">
      <div class="w-full flex flex-col justify-center items-center text-center lg:max-w-[75%] gap-4 md:gap-5 lg:gap-6">
        <div class="w-full lg:w-[86%]">
          <TitleSection class="md:text-center" :text="titleHTML" :html="true" :word-based="true"></TitleSection>
        </div>
        <div class="w-full flex flex-col gap-4 md:gap-5 lg:gap-6">
          <TextSection>Temukan berbagai program studi yang dirancang untuk mempersiapkan Anda
            menghadapi
            tantangan dunia kerja. Bergabunglah dengan kami dan kembangkan potensi Anda di bidang yang Anda
            cintai.</TextSection>
        </div>
      </div>
    </div>

    <!-- Dekstop -->
    <div class="hidden lg:grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
      <div v-for="(feature, index) in unggulan" :key="index" :class="`flex flex-col h-full gap-4 md:gap-5 lg:gap-6 justify-start relative p-5 overflow-hidden lg:p-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] ${[0, 3, 4].includes(index) ? 'col-span-2 bg-gradient-to-tl from-colorPrimary/30 via-white to-white' : 'col-span-1 bg-white'}`">
        <div class="flex gap-4 md:gap-5 lg:gap-6">
          <h6 class="text-[18px] md:text-[22px] lg:text-[26px] font-bold">{{ (index + 1).toString().padStart(2, '0') }}</h6>
          <div class="space-y-4 md:space-y-5 lg:space-y-6">
            <h6 class="text-[18px] md:text-[22px] lg:text-[26px] font-bold">{{ feature.title }}</h6>
            <TextBody><span v-html="feature.description"></span></TextBody>
          </div>

          <div v-if="[0, 3, 4].includes(index)" class="w-[25%] absolute bottom-0 right-0">
            <img :src="getImageUrl(feature.image)" alt="" class="w-full h-full object-contain">
          </div>
          <div v-if="[0, 3, 4].includes(index)" class="w-full">

          </div>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="lg:hidden grid grid-flow-row-dense grid-cols-1 gap-4 md:gap-5 lg:gap-6">
      <div v-for="(feature, index) in unggulan" :key="index" :class="`flex flex-col h-full gap-4 md:gap-5 lg:gap-6 justify-start relative p-5 overflow-hidden lg:p-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] bg-gradient-to-tl from-colorPrimary/30 via-white to-white`">
        <div class="flex gap-4 md:gap-5 lg:gap-6">
          <h6 class="text-[18px] md:text-[22px] lg:text-[26px] font-bold">{{ (index + 1).toString().padStart(2, '0') }}</h6>
          <div class="space-y-4 md:space-y-5 lg:space-y-6 pb-20 md:pb-36">
            <h6 class="text-[18px] md:text-[22px] lg:text-[26px] font-bold">{{ feature.title }}</h6>
            <TextBody><span v-html="feature.description"></span></TextBody>
          </div>

          <div class="w-[25%] absolute bottom-0 right-0">
            <img :src="getImageUrl(feature.image)" alt="" class="w-full h-full object-contain">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.svg-primary {
  filter: brightness(0) saturate(100%) invert(22%) sepia(65%) saturate(2915%) hue-rotate(338deg) brightness(91%) contrast(88%);
}
</style>
