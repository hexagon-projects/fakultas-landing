<script setup lang="ts">
import AgendaCard from '@/components/AgendaCard.vue';
import type { Agenda } from '@/core/types/agenda';

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  agenda: Agenda[]
}>();

</script>

<template>
  <div
    class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full grid grid-cols-1 gap-4 md:gap-6 lg:gap-8">
      <AgendaCard v-for="(agenda, index) in agenda" :key="`${agenda.id}`" :judul="agenda.title"
        :tanggal="agenda.end_date" :lokasi="agenda.location" :gambar="getImageUrl(agenda.image)"
        :deskripsi="agenda.description" :index="index" :slug="agenda.slug"/>
    </div>
  </div>
</template>
