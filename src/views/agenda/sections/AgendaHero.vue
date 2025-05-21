<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import { useSanitize } from '@/composables/useSanitize';
import type { Agenda } from '@/core/types/agenda';
import SectionLayout from '@/layouts/SectionLayout.vue'
import router from '@/router';

const { sanitizeHtml } = useSanitize()
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

const navigateToDetail = (slug: string) => {
  router.push({ name: 'agendaDetail', params: { slug } });
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

defineProps<{
  agenda: Agenda[];
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout>
    <div class="w-full flex flex-col gap-4 md:gap-6 lg:gap-8">
      <template v-if="isLoading">
        <div class="h-4 w-24 bg-gray-300 animate-pulse rounded"></div>
        <div class="h-10 w-64 bg-gray-300 animate-pulse rounded-lg"></div>
        <div class="h-4 w-96 bg-gray-300 animate-pulse rounded"></div>
      </template>
      <template v-else>
        <TextSection>Acara</TextSection>
        <TitleMain :text="'Agenda'"></TitleMain>
        <TextSection>Temukan agenda agenda menarik disini</TextSection>
      </template>
    </div>

    <div class="w-full flex flex-col md:flex-row gap-6 lg:gap-12 justify-between items-center">
      <template v-if="isLoading">
        <!-- Image Skeleton -->
        <div class="w-full md:w-1/2 h-[225px] md:h-[320px] lg:h-[420px] bg-gray-300 animate-pulse rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"></div>

        <!-- Content Skeleton -->
        <div class="w-full md:w-1/2 flex flex-col gap-4 md:gap-5 lg:gap-6">
          <div class="h-8 w-24 bg-gray-300 animate-pulse rounded"></div>
          <div class="space-y-2">
            <div class="h-6 w-full bg-gray-300 animate-pulse rounded"></div>
            <div class="h-4 w-3/4 bg-gray-300 animate-pulse rounded"></div>
          </div>
          <div class="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
          <div class="h-4 w-5/6 bg-gray-300 animate-pulse rounded"></div>
          <div class="h-12 w-40 bg-gray-300 animate-pulse rounded-lg"></div>
        </div>
      </template>
      <template v-else>
        <div class="w-full md:w-1/2 h-[225px] md:h-[320px] lg:h-[400px] relative overflow-hidden rounded-[16px] md:rounded-[24px] lg:rounded-[32px]" @click="navigateToDetail(agenda[0]?.slug || '')">
          <img :src="getImageUrl(agenda[0]?.image)" :alt="agenda[0]?.title || 'Gambar acara'"
            class="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-105">
          <div v-if="agenda[0]?.end_date"
            class="absolute top-4 left-4 rounded-[4px] md:rounded-[8px] lg:rounded-[16px] bg-white py-3 px-6 text-center">
            <p class="text-xs lg:text-sm">{{ formatDate(agenda[0]?.end_date).dayName }}</p>
            <p class="text-2xl lg:text-[32px] font-bold">{{ formatDate(agenda[0]?.end_date).day }}</p>
            <p class="text-xs lg:text-sm">{{ formatDate(agenda[0]?.end_date).month }} {{
              formatDate(agenda[0]?.end_date).year }}</p>
          </div>
        </div>
        <div class="w-full md:w-1/2 flex flex-col md:justify-start md:items-start gap-4 md:gap-5 lg:gap-6 cursor-pointer" @click="navigateToDetail(agenda[0]?.slug || '')">
          <div class="px-2 py-1 bg-[#EEEEEE] w-fit">
            <TextBody :weighText="'font-bold'">Agenda</TextBody>
          </div>

          <div class="space-y-2">
            <div>
              <h3 class="text-[18px] md:text-[20px] lg:text-[24px] font-bold">{{ agenda[0]?.title }}</h3>
              <TextBody>{{ agenda[0]?.location }}</TextBody>
            </div>

            <TextBody><span class="line-clamp-4 mt-5 [&_ol]:list-decimal [&_ul]:list-disc [&_li]:ml-6" v-html="sanitizeHtml(agenda[0]?.description)"></span></TextBody>
          </div>

          <div class="w-fit">
            <a :href="agenda[0]?.register_link" class="your-button-styles">
              <InteractiveHoverButton :text="'Daftar Sekarang'"></InteractiveHoverButton>
            </a>
          </div>
        </div>
      </template>
    </div>
  </SectionLayout>
</template>
