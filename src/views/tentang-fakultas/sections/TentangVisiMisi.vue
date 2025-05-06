<script lang="ts" setup>
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import Visi from '@/assets/visi.png'
import type { Faculty } from '@/core/types/fakultas';
import SectionLayout from '@/layouts/SectionLayout.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  fakultas: Faculty;
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout class="flex flex-col lg:flex-row justify-center items-center" v-if="fakultas.title4 && fakultas.description4">
    <div class="lg:w-1/2 w-full">
      <div class="w-full h-full"><img :src="Visi" alt=""></div>
    </div>
    <div class="lg:w-1/2 w-full">
      <div>
        <TitleSection class="mt-7" :text="fakultas.title4"></TitleSection>
        <p class="mt-5 text-sm lg:text-base" v-html="fakultas.description4"></p>
        <div class="flex gap-5 lg:mt-10 mt-5">
          <InteractiveHoverButton text="Daftar Sekarang" />
          <InteractiveHoverButton text="Selengkapnya" bg-color="bg-transparent" textColor="text-colorPrimary"
            borderColor="border-colorPrimary" bgHover="bg-colorPrimary" textHover="text-white" />
        </div>
      </div>
    </div>
  </SectionLayout>
</template>
