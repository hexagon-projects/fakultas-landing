<script setup lang="ts">
import TextSection from '@/components/TextSection.vue'
import TitleSection from '@/components/TitleSection.vue'
import SectionLayout from '@/layouts/SectionLayout.vue'
import HeroVideoDialog from '@/components/HeroVideoDialog.vue'
import type { Departement } from '@/core/types/departement';
import { useSanitize } from '@/composables/useSanitize';

const { sanitizeHtml } = useSanitize()
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

defineProps<{
  prodiDetail: Departement | null;
  isLoading?: boolean;
}>();
</script>

<template>
  <SectionLayout>
    <div class="flex flex-col-reverse lg:flex-row-reverse gap-6 lg:gap-20 lg:justify-center lg:items-center">
      <!-- Video Section -->
      <div class="w-full lg:w-[40%]">
        <template v-if="isLoading">
          <div class="w-full h-[60vh] bg-gray-300 animate-pulse rounded-[16px]"></div>
        </template>
        <template v-else-if="prodiDetail">
          <HeroVideoDialog
            :size="'w-full h-full lg:h-[60vh]'"
            :video-src="`https://www.youtube.com/embed/${prodiDetail.yt_id}`"
            :thumbnail-src="getImageUrl(prodiDetail.image2)"
            thumbnail-alt="Video tentang program studi"
            animation-style="from-center"
          />
        </template>
      </div>

      <!-- Content Section -->
      <div class="w-full lg:w-[70%] space-y-4 lg:space-y-6">
        <template v-if="isLoading">
          <div class="w-3/4 h-8 bg-gray-300 animate-pulse rounded"></div>
          <div class="space-y-2">
            <div class="w-full h-4 bg-gray-300 animate-pulse rounded"></div>
            <div class="w-full h-4 bg-gray-300 animate-pulse rounded"></div>
            <div class="w-5/6 h-4 bg-gray-300 animate-pulse rounded"></div>
          </div>
        </template>
        <template v-else-if="prodiDetail">
          <div class="w-full">
            <TitleSection :text="prodiDetail?.title1 || ''" />
          </div>
          <TextSection><span v-html="sanitizeHtml(prodiDetail?.description1 || '')"></span></TextSection>
        </template>
      </div>
    </div>
  </SectionLayout>
</template>
