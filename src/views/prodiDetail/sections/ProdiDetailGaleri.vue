<script setup lang="ts">
import ExpandableGallery from '@/components/insipra-ui/ExpandableGallery.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import type { Fasilitas } from '@/core/types/fasilitas';
import SectionLayout from '@/layouts/SectionLayout.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  fasilitas: Fasilitas[];
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout>
    <div class="text-center space-y-2 md:space-y-4">
      <TitleSection :text="'Fasilitas Unggulan'"></TitleSection>
      <TextSection>Fasilitas unggulan kami mendukung pengalaman belajar yang optimal.</TextSection>
    </div>

    <div class="w-full h-[500px] hidden md:flex gap-8 md:gap-10 lg:gap-12">
      <div class="w-full h-full grid grid-cols-1 gap-[50px]">
        <div class="h-[275px] relative group overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
          <img :src="getImageUrl(fasilitas[0]?.image1 || '')" alt=""
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"></div>
          <div
            class="absolute bottom-0 left-0 z-20 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <TextSection class="text-white" :weight-text="'font-bold'">{{ fasilitas[0]?.title || '' }}</TextSection>
          </div>
        </div>
        <div class="h-[175px] relative group overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
          <img :src="getImageUrl(fasilitas[1]?.image1 || '')" alt=""
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"></div>
          <div
            class="absolute bottom-0 left-0 z-20 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <TextSection class="text-white" :weight-text="'font-bold'">{{ fasilitas[1]?.title || '' }}</TextSection>
          </div>
        </div>
      </div>

      <div class="w-full h-full grid grid-cols-1 gap-[50px]">
        <div class="h-[100%] relative group overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
          <img :src="getImageUrl(fasilitas[2]?.image1 || '')" alt=""
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"></div>
          <div
            class="absolute bottom-0 left-0 z-20 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <TextSection class="text-white" :weight-text="'font-bold'">{{ fasilitas[2]?.title || '' }}</TextSection>
          </div>
        </div>
      </div>

      <div class="w-full h-full grid grid-cols-1 gap-[50px]">
        <div class="h-[175px] relative group overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
          <img :src="getImageUrl(fasilitas[3]?.image1 || '')" alt=""
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"></div>
          <div
            class="absolute bottom-0 left-0 z-20 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <TextSection class="text-white" :weight-text="'font-bold'">{{ fasilitas[3]?.title || '' }}</TextSection>
          </div>
        </div>
        <div class="h-[275px] relative group overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
          <img :src="getImageUrl(fasilitas[4]?.image1 || '')" alt=""
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-10 rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"></div>
          <div
            class="absolute bottom-0 left-0 z-20 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <TextSection class="text-white" :weight-text="'font-bold'">{{ fasilitas[4]?.title || '' }}</TextSection>
          </div>
        </div>
      </div>
    </div>
    <ExpandableGallery :facilities="fasilitas.slice(0, 5)" class="mt-5 md:hidden" />

    <div class="w-full flex justify-center items-center">
      <InteractiveHoverButton @click="$router.push('/fasilitas')" text="Selengkapnya" />
    </div>
  </SectionLayout>
</template>
