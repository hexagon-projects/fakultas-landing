<script setup lang="ts">
import TextSection from '@/components/TextSection.vue';
import { useSanitize } from '@/composables/useSanitize';
const baseUrl = import.meta.env.VITE_APP_IMG_URL;

const getImageUrl = (imagePath: string | null) => {
  if (!imagePath) return 'https://placehold.co/600x400';
  return `${baseUrl}/${imagePath}`;
};

const { sanitizeHtml } = useSanitize()

defineProps({
  alignText: {
    type: String,
    default: 'text-right'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <!-- Tablet & Dekstop -->
  <div class="md:flex flex-col text-left gap-2 md:gap-3 hidden">
    <div class="flex justify-center md:justify-start items-center gap-4">
      <div class="w-3 h-3 md:w-6 md:h-6">
        <img :src="getImageUrl(icon)" :alt="title" class="w-full h-full object-cover svg-primary" v-if="icon">
      </div>
      <p class="font-bold text-[14px] md:text-[14px] lg:text-[18px]">{{ title }}</p>
    </div>
    <div>
      <TextSection class="text-center md:text-left"><span v-html="sanitizeHtml(description)"></span></TextSection>
    </div>
  </div>

  <!-- Mobile -->
  <div class="flex flex-col text-left gap-2 md:gap-3 bg-white p-4 rounded-[8px] md:hidden">
    <div class="flex justify-start items-center gap-4">
      <div class="w-6 h-6 md:w-6 md:h-6">
        <img :src="getImageUrl(icon)" :alt="title" class="w-full h-full object-cover svg-primary" v-if="icon">
      </div>
      <div class="space-y-2">
        <p class="font-bold text-[14px] md:text-[14px] lg:text-[18px]">{{ title }}</p>
        <TextSection><span v-html="sanitizeHtml(description)"></span></TextSection>
      </div>
    </div>
  </div>
</template>

<style>
.svg-primary {
  filter: brightness(0) saturate(100%) invert(22%) sepia(65%) saturate(2915%) hue-rotate(338deg) brightness(91%) contrast(88%);
}
</style>
