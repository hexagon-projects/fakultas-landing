<script setup lang="ts">
import TextBody from '@/components/TextBody.vue';
import TextSection from '@/components/TextSection.vue';
import TitleMain from '@/components/TitleMain.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import { useDateFormat } from '@/composables/useDateFormat';
import { useSanitize } from '@/composables/useSanitize';
import type { Agenda } from '@/core/types/agenda';

const { sanitizeHtml } = useSanitize()
const { formatDate } = useDateFormat()
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  agenda?: Agenda
  isLoading?: boolean
}>();
</script>

<template>
  <div
    class="w-full px-[20px] py-[64px] md:px-[60px] md:py-[60px] lg:px-[120px] lg:py-[60px] space-y-12 md:space-y-16 lg:space-y-20">
    <div class="w-full flex flex-col justify-center items-start gap-10 md:gap-20 self-stretch">
      <template v-if="isLoading">
        <!-- Banner Image Skeleton -->
        <div class="self-stretch h-[200px] sm:h-[400px] md:h-[600px] lg:h-[738px] bg-gray-300 animate-pulse rounded-[16px] md:rounded-[24px] lg:rounded-[32px]"></div>

        <!-- Content Skeleton -->
        <div class="flex flex-col lg:flex-row items-start gap-10 md:gap-20 self-stretch">
          <!-- Left Column -->
          <div class="md:w-[60%] column flex flex-col items-start gap-6 md:gap-8 w-full order-1">
            <div class="flex flex-col items-start gap-4 md:gap-6 self-stretch">
              <div class="h-12 w-full bg-gray-300 animate-pulse rounded-lg"></div>
              <div class="h-4 w-full bg-gray-300 animate-pulse rounded"></div>
              <div class="h-4 w-5/6 bg-gray-300 animate-pulse rounded"></div>
              <div class="h-4 w-3/4 bg-gray-300 animate-pulse rounded"></div>
            </div>
            <div class="flex flex-row items-start gap-3 md:gap-4">
              <div class="h-12 w-32 bg-gray-300 animate-pulse rounded-lg"></div>
              <div class="h-12 w-32 bg-gray-300 animate-pulse rounded-lg"></div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="flex flex-col items-start gap-6 md:gap-8 w-full lg:w-[464px] order-2 sm:order-3 lg:order-2">
            <div class="grid grid-cols-2 gap-4 md:gap-8 w-full">
              <div v-for="i in 4" :key="i" class="list_item flex flex-col items-start gap-1 md:gap-2">
                <div class="h-6 w-24 bg-gray-300 animate-pulse rounded"></div>
                <div class="h-4 w-32 bg-gray-300 animate-pulse rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="self-stretch h-[200px] sm:h-[400px] md:h-[600px] lg:h-[738px] rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden">
          <img :src="getImageUrl(agenda?.image || '')" alt="Event banner image" class="w-full h-full object-cover" />
        </div>
        <div class="flex flex-col lg:flex-row items-start gap-10 md:gap-20 self-stretch">
          <div class="md:w-[60%] column flex flex-col items-start gap-6 md:gap-8 w-full order-1">
            <div class="flex flex-col items-start gap-4 md:gap-6 self-stretch">
              <TitleMain :text="agenda?.title"></TitleMain>
              <TextSection><span v-html="sanitizeHtml(agenda?.description || '')"></span></TextSection>
            </div>
            <div class="flex flex-row items-start gap-3 md:gap-4">
              <InteractiveHoverButton :text="'Daftar'"></InteractiveHoverButton>
              <InteractiveHoverButton :bg-color="'bg-transparent'" :bg-hover="'bg-colorPrimary'"
                :border-color="'border-colorPrimary'" :text="'Lihat Acara'" :text-color="'text-colorPrimary'"
                :text-hover="'group-hover:text-white'" />
            </div>
          </div>

          <div class="flex flex-col items-start gap-6 md:gap-8 w-full lg:w-[464px] order-2 sm:order-3 lg:order-2">
            <div class="grid grid-cols-2 gap-4 md:gap-8 w-full">
              <div class="list_item flex flex-col items-start gap-1 md:gap-2">
                <h3 class="self-stretch text-black text-lg md:text-xl font-bold leading-[140%]">
                  Tanggal
                </h3>
                <TextBody>
                  {{ formatDate(agenda?.start_date || '') }}
                </TextBody>
              </div>
              <div class="list_item flex flex-col items-start gap-1 md:gap-2">
                <h3 class="self-stretch text-black text-lg md:text-xl font-bold leading-[140%]">
                  Lokasi
                </h3>
                <TextBody>{{ agenda?.location }}</TextBody>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 md:gap-8 w-full">
              <div class="list_item flex flex-col items-start gap-1 md:gap-2">
                <h3 class="self-stretch text-black text-lg md:text-xl font-bold leading-[140%]">
                  Speaker
                </h3>
                <TextBody>{{ agenda?.contact }}</TextBody>
              </div>
              <div class="list_item flex flex-col items-start gap-1 md:gap-2">
                <h3 class="self-stretch text-black text-lg md:text-xl font-bold leading-[140%]">
                  Type
                </h3>
                <TextBody>{{ agenda?.event }}</TextBody>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
