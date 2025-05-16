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
      <div v-for="item in prodiDatas" :key="item.id" class="rounded-lg md:rounded-2xl lg:rounded-4xl space-y-4">
        <div class="w-full h-[22vh] md:h-[20vh] lg:h-[278px] relative cursor-pointer"
          @click="navigateToDetail(item.slug)">
          <div
            class="w-full h-full img-container group overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
            <img :src="getImageUrl(item.image1)" alt=""
              class="w-full h-full object-cover img-box group-hover:scale-105 transition duration-500">

            <svg :style="{ visibility: 'hidden', position: 'absolute' }" width="0" height="0"
              xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo" />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>

        </div>
        <div class="w-full flex justify-between items-center">
          <h2 class="text-base md:text-lg lg:text-xl font-medium">{{ item.name }}</h2>
          <div class="flex justify-center items-center gap-2 p-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px]">
            <div class="w-6 h-6"><img :src="Star" alt="" class="w-full h-full object-cover"></div>
            <TextBody>{{ item.akreditasi || 'akreditasi' }}</TextBody>
          </div>
        </div>
        <div class="flex gap-4 md:gap-5 lg:gap-6">
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

<style scoped>
.img-container {
  filter: url("#goo") drop-shadow(0px -2px 0px transparent)
}

.img-box {
  clip-path: polygon(80% 100%, 100% 80%, 100% 0%, 20% 0%, 0% 20%, 0% 100%);
}
</style>
