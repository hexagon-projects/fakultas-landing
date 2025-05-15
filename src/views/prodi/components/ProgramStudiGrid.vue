<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import type { Departement } from '@/core/types/departement';
import Star from '@/assets/icons/star.png'
import Gedung from '@/assets/gedung.jpg'
import router from '@/router';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';

defineProps<{
  prodiDatas?: Departement[];
  loading?: boolean;
  error?: string | null;
}>();

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return Gedung;
  return `${baseUrl}/${imagePath}`;
};

const navigateToDetail = (slug: string) => {
  router.push({ name: 'prodiDetail', params: { slug } });
};
</script>

<template>
  <div class="w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="item in prodiDatas" :key="item.id" class="lg:rounded-4xl space-y-4 p-4 bg-white rounded-[4px] md:rounded-[8px] lg:rounded-[16px]">
        <div class="w-full h-[22vh] md:h-[20vh] lg:h-[298px] relative cursor-pointer"
          @click="navigateToDetail(item.slug)">
          <div
            class="w-full h-full group overflow-hidden rounded-[4px] md:rounded-[8px] lg:rounded-[16px]">
            <img :src="getImageUrl(item.image1)" alt=""
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          </div>
        </div>
        <div
            class="flex gap-2 rounded-[4px] md:rounded-[8px] lg:rounded-[16px]">
            <div class="w-6 h-6"><img :src="Star" alt="" class="w-full h-full object-cover"></div>
            <TextBody>{{ item.akreditasi || 'akreditasi' }}</TextBody>
          </div>
        <h2 class="text-base md:text-lg lg:text-xl font-medium">{{ item.name }}</h2>
        <div class="w-full flex justify-between items-center gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-6 lg:pt-8">
          <a href="https://registrasi.unpas.ac.id/register" target="_blank" class="w-1/2">
            <InteractiveHoverButton :class="'w-full'" :padding="'py-2 px-4 lg:py-3 lg:px-6'" :text="'Daftar'"></InteractiveHoverButton>
          </a>
          <InteractiveHoverButton @click="navigateToDetail(item.slug)" :class="'w-1/2'" :padding="'py-2 px-4 lg:py-3 lg:px-6'"
            :bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'" :border-color="'border-colorPrimary'"
            :text="'Selengkapnya'" :text-color="'text-colorPrimary'" :text-hover="'group-hover:text-white'" />
        </div>
      </div>
    </div>
  </div>
</template>
