<script setup lang="ts">
import ExpandableGallery from '@/components/insipra-ui/ExpandableGallery.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
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
    class="w-full px-[30px] py-[15px] md:px-[60px] md:py-[30px] lg:px-[120px] lg:py-[120px] space-y-12 md:space-y-16 lg:space-y-20 bg-[#EFF0F0]">
    <div class="w-full flex flex-col gap-4 md:gap-5 lg:gap-6 justify-center items-center">
      <TitleSection :text="'Fasilitas Unggulan'"></TitleSection>
      <TextSection>Fasilitas unggulan kami mendukung pengalaman belajar yang optimal.</TextSection>
    </div>

    <!-- Tablet & Desktop -->
    <div
      v-if="fasilitas.length >= 3"
      class="w-full px-4 py-6 hidden md:flex justify-center items-end gap-4 lg:hidden"
    >
      <div
        v-for="(item, index) in [0, 1, 2]"
        :key="index"
        class="relative group overflow-hidden rounded-3xl"
      >
        <img
          :class="[
            'rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500',
            index === 1 ? 'w-[180px] h-56' : 'w-[222px] h-72',
          ]"
          :src="getImageUrl(fasilitas[index]?.image1 || '')"
          :alt="fasilitas[index]?.title || ''"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-0 rounded-3xl"
        ></div>
        <div
          class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"
        >
          <TextSection class="text-white font-bold">{{
            fasilitas[index]?.title || ''
          }}</TextSection>
        </div>
      </div>
    </div>

    <!-- Desktop View -->
    <div
      v-if="fasilitas.length > 0"
      class="w-full px-4 py-6 justify-center items-end gap-4 hidden lg:flex"
    >
      <div
        v-for="(item, index) in fasilitas.slice(0,5)"
        :key="index"
        class="relative group overflow-hidden rounded-3xl"
      >
        <img
          :class="[
            'rounded-3xl object-cover group-hover:scale-105 transition-transform duration-500',
            {
              0: 'h-96 w-[200px]', // Custom untuk index 1
              1: 'h-80 w-[222px]', // Custom untuk index 2
              2: 'h-64 w-56', // Custom untuk index 3
              3: 'h-80 w-[222px]', // Custom untuk index 4
              4: 'h-96 w-[200px]', // Custom untuk index 5
            }[index] || 'h-80 w-[222px]', // Fallback default jika index di luar 1-5
          ]"
          :src="getImageUrl(item?.image1 || '')"
          :alt="item?.title || ''"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-colorPrimary/90 via-transparent to-transparent z-0 rounded-"
        ></div>
        <div
          class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10"
        >
          <TextSection class="text-white font-bold">{{ item?.title || '' }}</TextSection>
        </div>
      </div>
    </div>

    <ExpandableGallery
      v-if="fasilitas.length > 0"
      :facilities="fasilitas"
      class="mt-5 md:hidden"
    />
  </div>
</template>
