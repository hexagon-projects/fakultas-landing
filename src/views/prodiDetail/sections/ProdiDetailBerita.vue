<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard.vue';
import SectionLayout from '@/layouts/SectionLayout.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Post } from '@/core/types/post';
import router from '@/router';
import type { Departement } from '@/core/types/departement';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  berita: Post[];
  prodiDetail: Departement
}>();

const baseUrl = import.meta.env.VITE_APP_IMG_URL

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

const goToBerita = () => {
  router.push('/berita');
};

const titleHTML = `Berita Seputar <span class="text-colorPrimary font-bold">Program Studi ${props.prodiDetail?.name}</span>`;
</script>

<template>
  <SectionLayout>
    <div class="space-y-4">
      <div class="w-fit py-2 px-5 border-[3px] border-colorPrimary rounded-[16px] md:rounded-[24px] lg:rounded-[32px]">
        <p class="text-colorPrimary text-sm lg:text-base font-bold">Berita</p>
      </div>
      <div class="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center gap-4">
        <div class="w-fit md:w-fit">
          <TitleSection
            :text="titleHTML"
            :html="true"
            :delay="60"
          />
        </div>
        <div class="w-fit">
          <InteractiveHoverButton @click="goToBerita" :text="t('global.all')"></InteractiveHoverButton>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-16">
      <ArticleCard
        v-for="(beritaItem, index) in berita"
        :key="index"
        :kategori="'Berita'"
        :judul="beritaItem.title"
        :tanggal="beritaItem.publish"
        :gambar="getImageUrl(beritaItem.image)"
        :slug="beritaItem.slug || ''"
      />
    </div>
  </SectionLayout>
</template>
