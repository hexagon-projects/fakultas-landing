<script setup lang="ts">
import Button from '@/components/Button.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import type { Prestasi } from '@/core/types/Prestasi';
import SectionLayout from '@/layouts/SectionLayout.vue';
import KegiatanCard from '@/views/prodiDetail/components/KegiatanCard.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  prestasi: Prestasi[];
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout>
    <div class="grid gap-5 text-center w-full lg:w-1/2 md:w-3/4 mx-auto">
      <TitleSection text="Prestasi Mahasiswa"></TitleSection>
      <TextSection>This grid captures the delicate interplay of light and shadow, creating moments of
        brilliance in each image.</TextSection>
      <div class="flex gap-5 justify-center flex-wrap">
        <Button className="btn-primary" padding="px-4 py-2">All</Button>
        <Button className="btn-neutral" padding="px-4 py-2">UKM</Button>
      </div>
    </div>
    <div class="w-full mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:px-20">
      <KegiatanCard v-for="(item, index) in prestasi" :key="index" :title="item.name"
        :description="item.description" :image="getImageUrl(item.image)" :index="index" class="cursor-pointer" />
    </div>
    <div class="flex justify-center mt-10">
      <InteractiveHoverButton text="Load More" />
    </div>
  </SectionLayout>
</template>
