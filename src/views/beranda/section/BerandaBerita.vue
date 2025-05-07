<script lang="ts" setup>
import ArticleCard from '@/components/ArticleCard.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import type { Faculty } from '@/core/types/fakultas';
import type { Post } from '@/core/types/post';
import SectionLayout from '@/layouts/SectionLayout.vue';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  fakultas: Faculty;
  post: Post[];
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout>
    <div class="flex justify-between lg:items-end flex-col lg:flex-row">
      <div class="grid gap-5">
        <h6
          class="md:px-6 md:py-2 px-4 py-1 border-2 border-colorPrimary rounded-full w-fit text-colorPrimary font-semibold text-sm md:text-base">
          Latest Insight
        </h6>
        <TitleSection v-if="fakultas.name"
          :text="`Seputar Berita <span class='text-colorPrimary'>${fakultas.name}</span>`" :html="true"
          class="text-black"></TitleSection>
      </div>
      <InteractiveHoverButton @click="$router.push('/berita')" text="Selengkapnya" class="w-fit mt-5 lg:mt-0"></InteractiveHoverButton>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-16 mt-10">
      <ArticleCard v-for="(beritaItem, index) in post" :key="index" :kategori="'Berita'"
        :judul="beritaItem.title" :tanggal="beritaItem.publish" :gambar="getImageUrl(beritaItem.image)"
        :slug="beritaItem.slug" />
    </div>
  </SectionLayout>
</template>
