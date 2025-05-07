<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Faculty } from '@/core/types/fakultas';
import type { Unggulan } from '@/core/types/unggulan';
import Gedung from '@/assets/gedung.jpg'
import DOMPurify from 'dompurify';
import { computed } from 'vue';

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
  fakultas: Faculty | null;
}>();

const titleHTML = computed(() => {
  if (!props.fakultas?.name) return 'Kenapa Harus Memilih Unpas';
  return `Kenapa Harus Memilih <span class="text-colorPrimary font-bold">${props?.fakultas?.name || ''}</span> Unpas`;
});
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
           class="w-full px-20 py-12 lg:px-24 lg:py-16 border-beam-container"
           :class="index % 2 === 0 ? 'bg-[#3FA889]/20' : 'bg-white'">
        <div class="flex flex-col justify-center items-center text-center gap-5 lg:gap-10">
          <div class="lg:w-[60px] lg:h-[60px]">
            <img :src="getImageUrl(feature.image)" alt="" :class="`w-full h-full object-cover rounded-[4px] md:rounded-[5px] lg:rounded-[10px]`">
          </div>

          <div class="space-y-2">
            <h5 class="text-[18px] md:text-[22px] lg:text-[26px] font-bold">{{ feature.title }}</h5>
            <TextSection class="text-text"><span v-html="sanitizeHtml(feature.description)"></span></TextSection>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-beam-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}

/* Grid 1 - bottom border left to right */
.border-beam-container:nth-child(1)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -30%;
  height: 4px;
  background: linear-gradient(to right, transparent, transparent 25%, #C22332 50%, transparent 75%, transparent);
  width: 80%;
  animation: borderWalkBottom 2.5s infinite linear;
}

/* Grid 2 - left border top to bottom */
.border-beam-container:nth-child(2)::after {
  content: '';
  position: absolute;
  top: -30%;
  left: 0;
  width: 4px;
  background: linear-gradient(to bottom, transparent, transparent 25%, #C22332 50%, transparent 75%, transparent);
  height: 80%;
  animation: borderWalkLeft 2.5s infinite linear;
}

/* Grid 3 - right border bottom to top */
.border-beam-container:nth-child(3)::after {
  content: '';
  position: absolute;
  bottom: -30%;
  right: 0;
  width: 4px;
  background: linear-gradient(to top, transparent, transparent 25%, #C22332 50%, transparent 75%, transparent);
  height: 80%;
  animation: borderWalkRight 2.5s infinite linear;
}

/* Grid 4 - top border right to left */
.border-beam-container:nth-child(4)::after {
  content: '';
  position: absolute;
  top: 0;
  right: -30%;
  height: 4px;
  background: linear-gradient(to left, transparent, transparent 25%, #C22332 50%, transparent 75%, transparent);
  width: 80%;
  animation: borderWalkTop 2.5s infinite linear;
}

@keyframes borderWalkBottom {
  0% { transform: translateX(0%); }
  100% { transform: translateX(600%); }
}

@keyframes borderWalkLeft {
  0% { transform: translateY(0%); }
  100% { transform: translateY(600%); }
}

@keyframes borderWalkRight {
  0% { transform: translateY(0%); }
  100% { transform: translateY(-600%); }
}

@keyframes borderWalkTop {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-600%); }
}

@media (max-width: 767px) {
  .border-beam-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -30%;
    height: 2px;
    background: linear-gradient(to right, transparent, transparent 25%, #C22332 50%, transparent 75%, transparent);
    width: 60%;
    animation: borderWalkBottom 2.5s infinite linear;
  }

  /* Remove other animations on mobile */
  .border-beam-container:nth-child(2)::after,
  .border-beam-container:nth-child(3)::after,
  .border-beam-container:nth-child(4)::after {
    content: none;
    animation: none;
  }
}
</style>
