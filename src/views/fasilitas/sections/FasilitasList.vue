<script lang="ts" setup>
import Button from '@/components/Button.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
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
  <div class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[160px] lg:py-[136px] space-y-10 md:space-y-14 lg:space-y-16">
    <div class="grid gap-5 text-center w-full lg:w-1/2 mx-auto">
      <TitleSection text="Fasilitas"></TitleSection>
      <TextSection>Scenes that unfold like a movie, with each image telling a cinematic story.</TextSection>
      <div class="flex gap-5 justify-center flex-wrap">
        <Button className="btn-primary" padding="px-4 py-2">All</Button>
        <Button className="btn-neutral" padding="px-4 py-2">UKM</Button>
      </div>
    </div>
    <div class="mt-10 lg:px-20 md:px-10">
      <div class="lg:gap-10 md:gap-5 hidden md:grid">
        <!-- First Row - Two equal width columns -->
        <div class="flex w-full lg:gap-10 md:gap-5">
          <!-- Left Image -->
          <div class="w-1/2 h-40 md:h-52 lg:h-60 rounded-[20px] bg-gray-300 relative overflow-hidden">
            <img v-if="fasilitas[0]?.image1" :src="getImageUrl(fasilitas[0].image1)"
              class="absolute inset-0 w-full h-full object-cover" alt="Facility image" />
          </div>

          <!-- Right Image -->
          <div class="w-1/2 h-40 md:h-52 lg:h-60 rounded-[20px] bg-gray-300 relative overflow-hidden">
            <img v-if="fasilitas[1]?.image1" :src="getImageUrl(fasilitas[1].image1)"
              class="absolute inset-0 w-full h-full object-cover" alt="Facility image" />
          </div>
        </div>

        <!-- Second Row - Grid layout -->
        <div class="grid grid-cols-3 lg:gap-10 md:gap-5">
          <!-- Text Content Cell -->
          <div class="w-full h-40 md:h-52 lg:h-60 flex flex-col justify-center gap-3">
            <h2 class="text-2xl font-bold">Laboratorium</h2>
            <TextSection>Cinematic grids create a sense of movement and drama by organizing images like scenes
              from a film.</TextSection>
          </div>

          <!-- Small Image Cell -->
          <div class="w-full h-40 md:h-52 lg:h-60 rounded-[20px] bg-gray-300 relative overflow-hidden">
            <img v-if="fasilitas[2]?.image1" :src="getImageUrl(fasilitas[2].image1)"
              class="absolute inset-0 w-full h-full object-cover" alt="Facility image" />
          </div>

          <!-- Tall Image Cell (spanning 2 rows) -->
          <div class="row-span-2 w-full h-full rounded-[20px] bg-gray-300 relative overflow-hidden">
            <img v-if="fasilitas[3]?.image1" :src="getImageUrl(fasilitas[3].image1)"
              class="absolute inset-0 w-full h-full object-cover" alt="Facility image" />
          </div>

          <!-- Bottom Row Images -->
          <div class="w-full h-40 md:h-52 lg:h-60 rounded-[20px] bg-gray-300 relative overflow-hidden">
            <img v-if="fasilitas[4]?.image1" :src="getImageUrl(fasilitas[4].image1)"
              class="absolute inset-0 w-full h-full object-cover" alt="Facility image" />
          </div>

          <div class="w-full h-40 md:h-52 lg:h-60 rounded-[20px] bg-gray-300 relative overflow-hidden">
            <img v-if="fasilitas[5]?.image1" :src="getImageUrl(fasilitas[5].image1)"
              class="absolute inset-0 w-full h-full object-cover" alt="Facility image" />
          </div>
        </div>
      </div>

      <div class="w-full mt-10 grid grid-cols-1 gap-5 md:hidden">
        <div
          class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition">
          <h6 class="text-white font-semibold">Image Title</h6>
          <TextSection class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextSection>
        </div>
        <div
          class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition">
          <h6 class="text-white font-semibold">Image Title</h6>
          <TextSection class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextSection>
        </div>
        <div
          class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition">
          <h6 class="text-white font-semibold">Image Title</h6>
          <TextSection class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextSection>
        </div>
        <div
          class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition">
          <h6 class="text-white font-semibold">Image Title</h6>
          <TextSection class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextSection>
        </div>
        <div
          class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition">
          <h6 class="text-white font-semibold">Image Title</h6>
          <TextSection class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextSection>
        </div>
        <div
          class="w-full h-64 bg-gray-200 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-5 rounded-[20px] cursor-pointer hover:scale-105 transition">
          <h6 class="text-white font-semibold">Image Title</h6>
          <TextSection class="text-white/40">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextSection>
        </div>
      </div>
    </div>
  </div>
</template>
