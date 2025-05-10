<script setup lang="ts">
import HeroVideoDialog from '@/components/HeroVideoDialog.vue';
import TextSection from '@/components/TextSection.vue';
import TitleSection from '@/components/TitleSection.vue';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button/InteractiveHoverButton.vue';
import type { Faculty } from '@/core/types/fakultas';
import SectionLayout from '@/layouts/SectionLayout.vue';
import { computed } from 'vue';

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return '';
  return `${baseUrl}/${imagePath}`;
};

const props = defineProps<{
  fakultas: Faculty | null;
  isLoading?: boolean;
}>();

const titleHTML = computed(() => {
  if (!props.fakultas?.name) return 'Tentang';
  return `${t('beranda.about_title')} <span class="text-colorPrimary">${props.fakultas?.name}</span>`;
});
</script>

<template>
  <SectionLayout>
    <div class="flex lg:gap-20 gap-5 flex-col lg:flex-row">
      <div class="lg:w-1/2 w-full">
        <TitleSection v-if="fakultas?.title2" :text="titleHTML" :html="true">
        </TitleSection>
      </div>
      <div class="lg:w-1/2 w-full">
        <TextSection><span v-html="fakultas?.description2"></span></TextSection>

        <InteractiveHoverButton @click="$router.push('/tentang-fakultas')" text="Selengkapnya" class="mt-10"></InteractiveHoverButton>
      </div>
    </div>

    <HeroVideoDialog :size="'w-full h-full h-[188px] md:h-[520px] lg:h-[738px]'" :video-src="`https://www.youtube.com/embed/${fakultas?.yt_id}`"
      :thumbnail-src="getImageUrl(fakultas?.image2 || '')" :thumbnail-alt="`Video Tentang ${fakultas?.name}`"
      animation-style="from-center" />
  </SectionLayout>
</template>
