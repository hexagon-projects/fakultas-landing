<script setup lang="ts">
import DosenCard from '@/views/prodi/components/DosenCard.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import type { Team } from '@/core/types/team';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  team: Team[]
}>();

</script>

<template>
  <div class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="flex flex-col gap-4 md:gap-5 lg:gap-6">
      <TextSection>Tim</TextSection>
      <TitleSection :text="'Dosen Akademi'"></TitleSection>
      <TextSection>Dosen-dosen unggulan dengan pengalaman dan keahlian tinggi</TextSection>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
      <DosenCard
        v-for="dosen in team"
        :key="dosen.id"
        :name="dosen.name"
        :position="dosen.title"
        :image="getImageUrl(dosen.image)"
        :facebook="dosen.fb"
        :instagram="dosen.ig"
        :youtube="dosen.yt"
        :tiktok="dosen.tiktok"
      />
    </div>
  </div>
</template>
