<script setup lang="ts">
import ExpandableGallery from '@/components/insipra-ui/ExpandableGallery.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import type { Fasilitas } from '@/core/types/fasilitas';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  fasilitas: Fasilitas[];
}>();
</script>

<template>
  <div
    class="w-full px-[30px] py-[15px] md:px-[60px] md:py-[30px] lg:px-[160px] lg:py-[120px] space-y-12 md:space-y-16 lg:space-y-20 bg-[#EFF0F0]">
    <div class="w-full flex flex-col gap-4 md:gap-5 lg:gap-6 justify-center items-center">
      <TitleSection :text="'Fasilitas Unggulan'"></TitleSection>
      <TextSection>Fasilitas unggulan kami mendukung pengalaman belajar yang optimal.</TextSection>
    </div>

    <!-- Tablet & Desktop -->
    <div v-if="fasilitas.length > 0"
      class="hidden md:grid grid-flow-row grid-cols-3 w-full h-[40vh] lg:h-[80vh] justify-center items-center gap-4 md:gap-10 lg:gap-14">
      <div
        class="w-full h-full row-span-2 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden relative group">
        <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10"></div>
        <img :src="getImageUrl(fasilitas[0]?.image1 || '')" :alt="fasilitas[0]?.title || ''"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div
          class="absolute bottom-0 left-0 z-20 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <TextSection class="text-white" :weight-text="'font-bold'">{{ fasilitas[0]?.title || '' }}</TextSection>
        </div>
      </div>

      <div
        class="w-full h-full col-span-2 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden relative group">
        <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10"></div>
        <img :src="getImageUrl(fasilitas[1]?.image1 || '')" :alt="fasilitas[1]?.title || ''"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div
          class="absolute bottom-0 left-0 z-20 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <TextSection class="text-white" :weight-text="'font-bold'">{{ fasilitas[1]?.title || '' }}</TextSection>
        </div>
      </div>

      <div class="w-full h-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden relative group">
        <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10"></div>
        <img :src="getImageUrl(fasilitas[2]?.image1 || '')" :alt="fasilitas[1]?.title || ''"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div
          class="absolute bottom-0 left-0 z-20 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <TextSection class="text-white" :weight-text="'font-bold'">{{ fasilitas[1]?.title || '' }}</TextSection>
        </div>
      </div>

      <div
        class="w-full h-full row-span-2 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden relative group">
        <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10"></div>
        <img :src="getImageUrl(fasilitas[4]?.image1 || '')" :alt="fasilitas[1]?.title || ''"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div
          class="absolute bottom-0 left-0 z-20 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <TextSection class="text-white" :weight-text="'font-bold'">{{ fasilitas[1]?.title || '' }}</TextSection>
        </div>
      </div>

      <div
        class="w-full h-full col-span-2 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden relative group">
        <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10"></div>
        <img :src="getImageUrl(fasilitas[3]?.image1 || '')" :alt="fasilitas[1]?.title || ''"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div
          class="absolute bottom-0 left-0 z-20 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <TextSection class="text-white" :weight-text="'font-bold'">{{ fasilitas[1]?.title || '' }}</TextSection>
        </div>
      </div>

    </div>

    <div class="w-full hidden md:flex justify-center items-center">
      <InteractiveHoverButton @click="$router.push('/fasilitas')" text="Selengkapnya" class="w-fit mt-5 lg:mt-0">
      </InteractiveHoverButton>
    </div>

    <ExpandableGallery v-if="fasilitas.length > 0" :facilities="fasilitas.slice(0, 5)" class="mt-5 md:hidden" />
  </div>
</template>
