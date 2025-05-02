<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Faculty } from '@/core/types/fakultas';
import type { Unggulan } from '@/core/types/unggulan';
import Gedung from '@/assets/gedung.jpg'
import DOMPurify from 'dompurify';
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const sanitizeHtml = (html: string) => {
  return DOMPurify.sanitize(html);
};

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return Gedung;
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  unggulan: Unggulan[];
  fakultas: Faculty;
}>();

const titleHTML =  `Kenapa Harus Memilih <span class="text-colorPrimary font-bold">${props?.fakultas?.name || ''}</span> Unpas`;
</script>

<template>
  <div class="w-full px-[20px] py-[24px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full flex justify-center items-center">
      <div class="w-full flex flex-col justify-center items-center text-center lg:max-w-[75%] gap-4 md:gap-5 lg:gap-6">
        <div class="w-full lg:w-[86%]">
          <TitleSection
            class="md:text-center"
            :text="titleHTML"
            :html="true"
            :word-based="true"
          ></TitleSection>
        </div>
        <div class="w-full flex flex-col gap-4 md:gap-5 lg:gap-6">
          <TextSection>Temukan berbagai program studi yang dirancang untuk mempersiapkan Anda
            menghadapi
            tantangan dunia kerja. Bergabunglah dengan kami dan kembangkan potensi Anda di bidang yang Anda
            cintai.</TextSection>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2">
      <div v-for="(feature, index) in unggulan" :key="index"
           class="w-full px-20 py-12 lg:px-24 lg:py-16"
           :class="index % 2 === 0 ? 'bg-[#3FA889]/20' : 'bg-white'">
        <div class="flex flex-col justify-center items-center text-center gap-5 lg:gap-10">
          <div class="lg:w-[60px] lg:h-[60px]">
            <img :src="getImageUrl(feature.image)" alt="" :class="`w-full h-full object-cover rounded-[4px] md:rounded-[5px] lg:rounded-[10px]`">
          </div>

          <div class="space-y-2">
            <p class="text-[18px] md:text-[22px] lg:text-[26px] font-bold">{{ feature.title }}</p>
            <TextSection class="text-text"><span v-html="sanitizeHtml(feature.description)"></span></TextSection>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
