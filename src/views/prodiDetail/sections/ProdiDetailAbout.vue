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
  prodiDetail: Departement
}>();
</script>

<template>
  <SectionLayout>
    <div class="flex flex-col-reverse lg:flex-row-reverse gap-6 lg:gap-20 lg:justify-center lg:items-center">
      <div class="w-full lg:w-[40%]">
        <HeroVideoDialog :size="'w-full h-full lg:h-[60vh]'" :video-src="`https://www.youtube.com/embed/${prodiDetail.yt_id}`"
          :thumbnail-src="getImageUrl(prodiDetail.image1)"
          thumbnail-alt="Video tentang program studi" animation-style="from-center" />
      </div>

      <div class="w-full lg:w-[70%] space-y-4 lg:space-y-6">
        <div class="w-full">
          <TitleSection :text="prodiDetail?.title1 || ''" />
        </div>
        <TextSection><span v-html="sanitizeHtml(prodiDetail?.description1 || '')"></span></TextSection>
      </div>
    </div>
  </SectionLayout>
</template>
