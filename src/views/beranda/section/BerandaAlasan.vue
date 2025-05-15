<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import UspCard from '@/components/UspCard.vue';
import type { Faculty } from '@/core/types/fakultas';
import type { Unggulan } from '@/core/types/unggulan';
import SectionLayout from '@/layouts/SectionLayout.vue';
import { computed } from 'vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  fakultas: Faculty | null;
  usp: Unggulan[];
  isLoading?: boolean;
}>();

const titleHTML = computed(() => {
  if (!props.fakultas?.name) return 'Kenapa Harus Memilih Unpas';
  return `Kenapa Harus Memilih <span class="text-colorPrimary">${props.fakultas.name}</span> Unpas`;
});
</script>

<template>
  <SectionLayout>
    <div class="bg-[#F0F0F0] p-0 md:p-12 lg:p-16 rounded-[16px] md:rounded-[24px] lg:rounded-[32px] space-y-10 md:space-y-14 lg:space-y-16">
      <div class="text-center w-full lg:w-1/2 mx-auto space-y-2 lg:space-y-4">
        <TitleSection :text="titleHTML" :html="true"></TitleSection>
        <TextSection>Fakultas Hukum Unpas memiliki berbagai keunggulan yang membuatnya menjadi pilihan terbaik
          untuk pendidikan hukum.</TextSection>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        <UspCard v-for="(item, index) in usp" :key="index" :title="item.title" :description="item.description"
          :image="getImageUrl(item.image)" :index="index + 1" />
      </div>
    </div>
  </SectionLayout>
</template>
