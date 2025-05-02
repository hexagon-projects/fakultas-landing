<script setup lang="ts">
import AcaraCard from '../components/AcaraCard.vue';
import TitleSection from '@/components/TitleSection.vue';
import TextSection from '@/components/TextSection.vue';
import ButtonSection from '@/components/ButtonSection.vue';
import type { Agenda } from '@/core/types/agenda';
import { useRouter } from 'vue-router';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';

const router = useRouter();
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

defineProps<{
  acara: Agenda[]
}>();

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const days = ['Ming', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

  return {
    dayName: days[date.getDay()],
    day: date.getDate(),
    month: months[date.getMonth()],
    year: date.getFullYear(),
    fullDate: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  };
};

const goToAgendaDetail = (slug: string) => {
  router.push({ name: 'agendaDetail', params: { slug } });
};
</script>

<template>
  <div
    class="w-full px-[20px] py-[32px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full flex flex-col justify-center items-center gap-4 md:gap-5 lg:gap-6">
      <TitleSection :text="'Acara'"></TitleSection>
      <TextSection>Dapatkan informasi lebih lanjut tentang acara kami.</TextSection>
    </div>

    <div v-if="acara?.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
      <AcaraCard v-for="item in acara" :key="item.id" :title="item.title" :description="item.description"
        :location="item.location" :image="getImageUrl(item.image)" :date="formatDate(item.start_date)"
        @click="goToAgendaDetail(item.slug)" />
    </div>

    <div v-else class="text-center py-8">
      <TextSection>Tidak ada acara yang tersedia saat ini</TextSection>
    </div>

    <div class="w-full flex justify-center items-center">
      <!-- <ButtonSection @click="router.push({ name: 'agenda' })">
        Lihat Semua Acara
      </ButtonSection> -->

      <InteractiveHoverButton @click="router.push({ name: 'agenda' })" :text="'Lihat Semua Acara'">
      </InteractiveHoverButton>
    </div>
  </div>
</template>
