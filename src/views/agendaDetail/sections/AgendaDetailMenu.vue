<script setup lang="ts">
import TextBody from '@/components/TextBody.vue'
import ArticleSideCard from '../components/ArticleSideCard.vue'
import type { Agenda } from '@/core/types/agenda';
import { useSanitize } from '@/composables/useSanitize';
import { useDateFormat } from '@/composables/useDateFormat';
import type { Post } from '@/core/types/post';
import { useRouter } from 'vue-router';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';

const { sanitizeHtml } = useSanitize()
const { formatDate } = useDateFormat()
const router = useRouter()
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

const handleAgendaClick = (agenda: Agenda | undefined) => {
  if (!agenda) return;

  if (agenda.register_link) {
    window.open(agenda.register_link, '_blank');
  } else if (agenda.slug) {
    router.push(`/agenda/${agenda.slug}`);
  }
};

defineProps<{
  agenda?: Agenda
  agendas?: Agenda[]
  posts?: Post[]
  isLoading?: boolean
}>();
</script>

<template>
  <div
    class="w-full px-[20px] md:px-[60px] lg:px-[120px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-8">
      <template v-if="isLoading">
        <!-- Left Column Skeleton -->
        <div class="w-full md:w-[65%]">
          <div class="h-4 w-full bg-gray-300 animate-pulse rounded mb-4"></div>
          <div class="h-4 w-5/6 bg-gray-300 animate-pulse rounded mb-4"></div>
          <div class="h-4 w-3/4 bg-gray-300 animate-pulse rounded mb-4"></div>
          <div class="h-4 w-full bg-gray-300 animate-pulse rounded mb-4"></div>
          <div class="h-4 w-2/3 bg-gray-300 animate-pulse rounded"></div>
        </div>

        <!-- Right Column Skeleton -->
        <div class="w-full md:w-[35%] flex flex-col gap-8 lg:gap-8">
          <div class="space-y-4">
            <div class="space-y-4 md:space-y-5 lg:space-y-6">
              <div class="h-6 w-32 bg-gray-300 animate-pulse rounded"></div>
              <div class="w-full h-40 md:h-[25vh] bg-gray-300 animate-pulse rounded-[4px] md:rounded-[8px] lg:rounded-[16px]"></div>
            </div>
            <div class="w-full flex flex-col gap-4 lg:gap-5 md:w-full">
              <div class="w-full space-y-4 lg:space-y-4">
                <div class="space-y-2">
                  <div class="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
                  <div class="h-3 w-3/4 bg-gray-300 animate-pulse rounded"></div>
                </div>
              </div>
              <div class="h-10 w-32 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
          </div>
          <div class="space-y-4 md:space-y-5 lg:space-y-6">
            <div class="h-6 w-32 bg-gray-300 animate-pulse rounded"></div>
            <div v-for="i in 3" :key="i" class="h-20 bg-gray-300 animate-pulse rounded"></div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="w-full md:w-[65%]">
          <TextBody><span v-html="sanitizeHtml(agenda?.description || '')"></span></TextBody>
        </div>

        <div class="w-full md:w-[35%] flex flex-col gap-8 lg:gap-8">
          <div class="space-y-4">
            <div class="space-y-4 md:space-y-5 lg:space-y-6">
              <h4 class="text-[18px] md:text-[20px] lg:text-[22px] font-bold">Agenda Terkait</h4>
              <div
                class="w-full h-40 md:h-[25vh] rounded-[4px] md:rounded-[8px] lg:rounded-[16px] overflow-hidden cursor-pointer"
                @click="handleAgendaClick(agendas?.[0])"
              >
                <img
                  :src="getImageUrl(agendas?.[0]?.image || '')"
                  alt="Gambar Berita"
                  class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                >
              </div>
            </div>

            <div class="w-full flex flex-col gap-4 lg:gap-5 md:w-full">
              <div class="w-full space-y-4 lg:space-y-4">
                <div class="space-y-2">
                  <p class="text-sm md:text-base lg:text-lg font-bold">{{ agendas?.[0]?.title }}</p>
                  <p class="text-xs md:text-xs lg:text-base">
                    {{ formatDate(agendas?.[0]?.start_date || '') }} • {{ agendas?.[0]?.location }}
                  </p>
                </div>
              </div>
              <InteractiveHoverButton @click="handleAgendaClick(agendas?.[0])" class="w-fit" :text="'Selengkapnya'"></InteractiveHoverButton>
            </div>
          </div>

          <div class="space-y-4 md:space-y-5 lg:space-y-6">
            <h4 class="text-[18px] md:text-[20px] lg:text-[22px] font-bold">Berita Terkait</h4>
            <ArticleSideCard :posts="posts" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
